import { EntityRepository, Repository } from 'typeorm';
import { Encounter } from './encounter.entity';

@EntityRepository(Encounter)
export class EncounterRepository extends Repository<Encounter> {
  async findByCampaignId(campaignId: number): Promise<Encounter[]> {
    return await this.find({ where: { campaign: { id: campaignId } } });
  }
}
