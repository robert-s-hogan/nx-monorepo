import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//controller
import { EncounterController } from './encounter.controller';

//services
import { EncounterService } from './encounter.service';
import { CampaignService } from '../campaign/campaign.service';
import { CharacterAdvancementService } from '../character-advancement/character-advancement.service';

//encounter
import { Encounter } from './encounter.entity';
import { Campaign } from '../campaign/campaign.entity';

//modules
import { CampaignModule } from '../campaign/campaign.module';

@Module({
  imports: [TypeOrmModule.forFeature([Encounter, Campaign]), CampaignModule],
  controllers: [EncounterController],
  providers: [EncounterService, CampaignService, CharacterAdvancementService],
})
export class EncounterModule {}
