import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { CharacterAdvancement } from '../../character-advancement/character-advancement-data';

export class CreateEncounterDto {
  @ApiProperty({ required: false, example: 1 })
  @IsNumber()
  campaignId: number;

  @ApiProperty({ required: true, example: 4 })
  @IsNumber()
  player_count: number;

  @ApiProperty({ required: true, example: 100 })
  @IsNumber()
  player_experience_start: number;

  @ApiProperty({ required: true, example: 100 })
  @IsNumber()
  encounter_adjusted_experience: number;

  @ApiProperty({ required: true, example: 100 })
  @IsNumber()
  encounter_experience: number;

  @ApiProperty({ required: false, example: false })
  @IsOptional()
  @IsString()
  notes = '';

  @ApiProperty({ required: false, example: false })
  @IsOptional()
  @IsBoolean()
  encounter_success: boolean;

  @ApiProperty({
    required: false,
    type: () => CharacterAdvancement,
    description: 'Character advancement data based on player_experience_start',
  })
  characterAdvancement: CharacterAdvancement;
}
