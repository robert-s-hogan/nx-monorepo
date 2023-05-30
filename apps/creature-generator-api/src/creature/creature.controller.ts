// src/creature/creature.controller.ts

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatureService } from './creature.service';
import { Creature } from '../entities/creature.entity';

@Controller('creatures')
export class CreatureController {
  constructor(private readonly creatureService: CreatureService) {}

  @Get()
  getCreatures() {
    return this.creatureService.findAll();
  }

  @Get(':id')
  getCreature(@Param('id') id: string) {
    console.log(`Controller id: ${id}`);
    return this.creatureService.findOne(Number(id));
  }

  @Post()
  createCreature(@Body() creatureData: Partial<Creature>) {
    return this.creatureService.create(creatureData);
  }

  @Put(':id')
  updateCreature(
    @Param('id') id: string,
    @Body() creatureData: Partial<Creature>
  ) {
    return this.creatureService.update(Number(id), creatureData);
  }

  @Delete(':id')
  deleteCreature(@Param('id') id: string) {
    return this.creatureService.delete(Number(id));
  }
}
