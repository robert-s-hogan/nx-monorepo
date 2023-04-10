import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { Encounter } from './encounter.entity';
import { Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

//services
import { CharacterAdvancementService } from '../character-advancement/character-advancement.service';
import { CampaignService } from '../campaign/campaign.service';

@ApiTags('Encounters')
@Injectable()
export class EncounterService {
  constructor(
    @InjectRepository(Encounter)
    private readonly encounterRepository: Repository<Encounter>,
    private readonly campaignService: CampaignService,
    private readonly characterAdvancementService: CharacterAdvancementService
  ) {}

  async create(
    createEncounterDto: CreateEncounterDto
  ): Promise<Encounter | Encounter[]> {
    const updatedEncounterDto = {
      ...createEncounterDto,
    };

    const characterAdvancement =
      this.characterAdvancementService.getAdvancementData(
        createEncounterDto.player_experience_start
      );

    createEncounterDto.characterAdvancement = characterAdvancement;

    const encounter = this.encounterRepository.create(updatedEncounterDto);

    return await this.encounterRepository.save(encounter);
  }

  async findAll(): Promise<Encounter[]> {
    return this.encounterRepository.find();
  }

  async findOne(id: number): Promise<Encounter> {
    return this.encounterRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateEncounterDto: CreateEncounterDto
  ): Promise<Encounter> {
    await this.encounterRepository.update(id, updateEncounterDto);
    return this.encounterRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<Encounter> {
    const encounterToDelete = await this.findOne(id);
    await this.encounterRepository.delete(id);
    return encounterToDelete;
  }
}
