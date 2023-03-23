import { EntityRepository, Repository } from 'typeorm';
import { Campaign } from './campaign.entity';

@EntityRepository(Campaign)
export class CampaignRepository extends Repository<Campaign> {
  async findByUserId(userId: number): Promise<Campaign[]> {
    return await this.find({ where: { user: { id: userId } } });
  }
}
