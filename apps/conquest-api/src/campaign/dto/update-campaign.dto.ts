import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateCampaignDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  playerCount?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  encounterAdjustedExperience?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  encounterExperience?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(20)
  playerLevel?: number;

  // Add any other optional fields for updating here
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

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

  // Add any other optional fields for updating here
}
