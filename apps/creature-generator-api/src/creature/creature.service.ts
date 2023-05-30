// src/creature/creature.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Creature } from '../entities/creature.entity';
import { UpdateCreatureDto } from './dto/update-creature.dto';

@Injectable()
export class CreatureService {
  constructor(
    @InjectRepository(Creature)
    private creaturesRepository: Repository<Creature>
  ) {}

  findAll(): Promise<Creature[]> {
    return this.creaturesRepository.find();
  }

  findOne(id: number): Promise<Creature> {
    console.log(`findOne id: ${id}`);
    return this.creaturesRepository.findOne({ where: { id: id } });
  }

  async create(creatureData: Partial<Creature>): Promise<Creature> {
    const creature = this.creaturesRepository.create(creatureData);
    await this.creaturesRepository.save(creature);
    return creature;
  }

  async update(id: number, updateCreatureDto: UpdateCreatureDto) {
    try {
      const creature = await this.creaturesRepository.findOneOrFail({
        where: { id: id },
      }); // corrected line
      const updatedCreature = Object.assign(creature, updateCreatureDto);
      return this.creaturesRepository.save(updatedCreature);
    } catch (error) {
      throw new HttpException(
        `Error updating creature: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async delete(id: number): Promise<void> {
    const existingCreature = await this.creaturesRepository.findOne({
      where: { id: id },
    });
    if (!existingCreature) {
      throw new NotFoundException(`Creature #${id} not found`);
    }
    await this.creaturesRepository.delete(id);
  }
}
