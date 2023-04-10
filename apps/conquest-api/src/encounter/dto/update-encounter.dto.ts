import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { CharacterAdvancement } from '../../character-advancement/character-advancement-data';

export class UpdateEncounterDto {
  @ApiProperty({ required: false })
  @IsNumber()
  campaignId: number;

  // @ApiProperty({ required: false })
  // @IsOptional()
  // @IsNumber()
  // mapId?: number;

  @ApiProperty({ required: true, example: 4 })
  @IsNumber()
  player_count: number;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsNumber()
  player_experience_start = 0;

  @ApiProperty({ required: true, example: 100 })
  @IsNumber()
  encounter_adjusted_experience = 0;

  @ApiProperty({ required: true, example: 100 })
  @IsNumber()
  encounter_experience = 0;

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
