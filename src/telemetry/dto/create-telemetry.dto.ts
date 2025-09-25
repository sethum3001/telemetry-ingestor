import {
  IsString,
  IsDateString,
  ValidateNested,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

class MetricsDto {
  @IsNumber() temperature: number;
  @IsNumber() humidity: number;
}

export class CreateTelemetryDto {
  @IsString() deviceId: string;
  @IsString() siteId: string;
  @IsDateString() ts: string;

  @ValidateNested()
  @Type(() => MetricsDto)
  metrics: MetricsDto;
}
