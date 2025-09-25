import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Redis from 'ioredis';
import axios from 'axios';
import { Telemetry } from './schemas/telemetry.schema';
import { CreateTelemetryDto } from './dto/create-telemetry.dto';

@Injectable()
export class TelemetryService {
  private redis: Redis;
  private logger = new Logger(TelemetryService.name);

  constructor(
    @InjectModel(Telemetry.name) private telemetryModel: Model<Telemetry>,
  ) {
    this.redis = new Redis(process.env.REDIS_URL as string);
  }

  async ingest(data: CreateTelemetryDto | CreateTelemetryDto[]) {
    const payloads = Array.isArray(data) ? data : [data];
    for (const p of payloads) {
      const saved = await new this.telemetryModel(p).save();
      await this.redis.set(`latest:${p.deviceId}`, JSON.stringify(saved));

      if (p.metrics.temperature > 50)
        await this.sendAlert(p, 'HIGH_TEMPERATURE', p.metrics.temperature);
      if (p.metrics.humidity > 90)
        await this.sendAlert(p, 'HIGH_HUMIDITY', p.metrics.humidity);
    }
    return { success: true };
  }

  async sendAlert(p: CreateTelemetryDto, reason: string, value: number) {
    try {
      await axios.post(process.env.ALERT_WEBHOOK_URL as string, {
        deviceId: p.deviceId,
        siteId: p.siteId,
        ts: p.ts,
        reason,
        value,
      });
    } catch (err) {
      this.logger.error('Alert failed', err.message);
    }
  }

  async latest(deviceId: string) {
    const cache = await this.redis.get(`latest:${deviceId}`);
    if (cache) return JSON.parse(cache);
    return this.telemetryModel.findOne({ deviceId }).sort({ ts: -1 }).exec();
  }

  async siteSummary(siteId: string, from: string, to: string) {
    const result = await this.telemetryModel.aggregate([
      { $match: { siteId, ts: { $gte: new Date(from), $lte: new Date(to) } } },
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
          avgTemperature: { $avg: '$metrics.temperature' },
          maxTemperature: { $max: '$metrics.temperature' },
          avgHumidity: { $avg: '$metrics.humidity' },
          maxHumidity: { $max: '$metrics.humidity' },
          uniqueDevices: { $addToSet: '$deviceId' },
        }
      },
      {
        $project: {
          uniqueDevices: { $size: '$uniqueDevices' },
          count: 1,
          avgTemperature: 1,
          maxTemperature: 1,
          avgHumidity: 1,
          maxHumidity: 1,
        },
      },
    ]);
    return result[0] || {};
  }
}