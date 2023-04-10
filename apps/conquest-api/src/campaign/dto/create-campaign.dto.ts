import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCampaignDto {
  @ApiProperty({ required: true, example: 'Campaign Name (REQUIRED)' })
  @IsString()
  name: string;

  @ApiProperty({ required: false, example: 100 })
  @IsOptional()
  @IsNumber()
  player_experience_start: number;

  @ApiProperty({ required: false, example: 'Some notes about the campaign' })
  @IsOptional()
  @IsString()
  notes?: string;
}
