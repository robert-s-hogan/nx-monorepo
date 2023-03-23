import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateCampaignDto {
  @ApiProperty()
  @IsNumber()
  playerCount: number;

  @ApiProperty()
  @IsNumber()
  encounterAdjustedExperience: number;

  @ApiProperty()
  @IsNumber()
  encounterExperience: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(20)
  playerLevel: number;

  // Add any other required fields here
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  playerStartingExperience?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  intro?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  mapTerrainType?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  mapDimensions?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  timeOfDay?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  objective?: string;
}