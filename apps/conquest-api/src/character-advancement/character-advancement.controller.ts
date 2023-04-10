import { Controller, Get, Param } from '@nestjs/common';
import { CharacterAdvancementService } from './character-advancement.service';
import { ChallengeRatingXp } from './challenge-rating-xp-lookup';
import { EncounterMultipliers } from './encounter-mulitplier-lookup';

@Controller('character-advancement')
export class CharacterAdvancementController {
  constructor(
    private readonly characterAdvancementService: CharacterAdvancementService
  ) {}

  @Get('adjusted-xp/:level')
  getAdjustedXpPerDay(@Param('level') level: number): number | undefined {
    return this.characterAdvancementService.getAdjustedXpPerDay(level);
  }

  @Get('challenge-rating-xp/:cr')
  getChallengeRatingXp(@Param('cr') cr: number): ChallengeRatingXp | undefined {
    return this.characterAdvancementService.getChallengeRatingXp(cr);
  }

  @Get('encounter-multiplier/:numberOfMonsters')
  getEncounterMultiplier(
    @Param('numberOfMonsters') numberOfMonsters: number
  ): EncounterMultipliers | undefined {
    return this.characterAdvancementService.getEncounterMultiplier(
      numberOfMonsters
    );
  }
}
