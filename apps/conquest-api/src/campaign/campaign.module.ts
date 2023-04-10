import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';

//entities
import { Campaign } from './campaign.entity';
import { Encounter } from '../encounter/encounter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign, Encounter])],
  providers: [CampaignService],
  controllers: [CampaignController],
  exports: [CampaignService],
})
export class CampaignModule {}
