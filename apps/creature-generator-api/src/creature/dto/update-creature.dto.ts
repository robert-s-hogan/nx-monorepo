// src/creature/dto/update-creature.dto.ts
import { Action } from '../../entities/action.entity';
import { SpecialAbility } from '../../entities/special-ability.entity';

export class UpdateCreatureDto {
  name?: string;
  description?: string;
  imagePrompt?: string;
  armorClass?: number;
  hitPoints?: number;
  speed?: string;
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  actions?: Action[];
  specialAbilities?: SpecialAbility[];
}
