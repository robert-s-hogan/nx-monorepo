import { Injectable } from '@nestjs/common';
import { characterAdvancementData } from './character-advancement-data';
import { AdjustedXpPerDay, adjustedXpLookup } from './adjusted-xp-lookup';

import {
  EncounterDifficulty,
  encounterDifficultyLookup,
} from './encounter-difficulty-lookup';
import {
  ChallengeRatingXp,
  challengeRatingXpLookup,
} from './challenge-rating-xp-lookup';
import {
  EncounterMultipliers,
  encounterMultipliersLookup,
} from './encounter-mulitplier-lookup';

export interface CharacterAdvancement {
  level: number;
  xpStart: number;
  xpEnd: number;
  xpNeeded: number;
  xpTotal: number;
}

@Injectable()
export class CharacterAdvancementService {
  private readonly characterAdvancements: CharacterAdvancement[] =
    characterAdvancementData;

  private binarySearch(
    xp: number,
    start: number,
    end: number
  ): CharacterAdvancement | undefined {
    if (start > end) {
      return undefined;
    }

    const mid = Math.floor((start + end) / 2);
    const adv = this.characterAdvancements[mid];

    if (xp >= adv.xpStart && xp <= adv.xpEnd) {
      return adv;
    } else if (xp < adv.xpStart) {
      return this.binarySearch(xp, start, mid - 1);
    } else {
      return this.binarySearch(xp, mid + 1, end);
    }
  }

  getAdvancementData(xp: number): CharacterAdvancement | undefined {
    return this.binarySearch(xp, 0, this.characterAdvancements.length - 1);
  }

  getCharacterAdvancement(xp: number): CharacterAdvancement | null {
    for (const advancement of characterAdvancementData) {
      if (
        xp >= advancement.xpStart &&
        (advancement.xpEnd === null || xp <= advancement.xpEnd)
      ) {
        return advancement;
      }
    }
    return null;
  }

  getAdjustedXpPerDay(level: number): number | undefined {
    const adjustedXp = adjustedXpLookup.find((item) => item.level === level);
    return adjustedXp ? adjustedXp.adjustedXpPerDay : undefined;
  }

  getEncounterDifficulty(charLevel: number): EncounterDifficulty | undefined {
    const encounterDiff = encounterDifficultyLookup.find(
      (item) => item.charLevel === charLevel
    );
    return encounterDiff;
  }

  getChallengeRatingXp(cr: number): ChallengeRatingXp | undefined {
    const challengeRatingXp = challengeRatingXpLookup.find(
      (item) => item.cr === cr
    );
    return challengeRatingXp;
  }

  getEncounterMultiplier(
    numberOfMonsters: number
  ): EncounterMultipliers | undefined {
    const encounterMultiplier = encounterMultipliersLookup.find(
      (item) => item.numberOfMonsters === numberOfMonsters
    );
    return encounterMultiplier;
  }
}
