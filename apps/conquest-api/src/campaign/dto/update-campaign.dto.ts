import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateCampaignDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(20)
  player_count?: number;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsNumber()
  player_experience_start?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  group_alive?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  rests?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}
