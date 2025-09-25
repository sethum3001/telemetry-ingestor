import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { TelemetryService } from './telemetry.service';
import { CreateTelemetryDto } from './dto/create-telemetry.dto';

@Controller('api/v1')
export class TelemetryController {
  constructor(private readonly service: TelemetryService) {}

  @Post('telemetry')
  async ingest(@Body() body: CreateTelemetryDto | CreateTelemetryDto[]) {
    return this.service.ingest(body);
  }

  @Get('devices/:deviceId/latest')
  async latest(@Param('deviceId') deviceId: string) {
    return this.service.latest(deviceId);
  }

  @Get('sites/:siteId/summary')
  async summary(
    @Param('siteId') siteId: string,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    return this.service.siteSummary(siteId, from, to);
  }
}
