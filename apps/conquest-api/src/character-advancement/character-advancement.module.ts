import { Module } from '@nestjs/common';
import { CharacterAdvancementService } from './character-advancement.service';

@Module({
  providers: [CharacterAdvancementService],
  exports: [CharacterAdvancementService],
})
export class CharacterAdvancementModule {}
