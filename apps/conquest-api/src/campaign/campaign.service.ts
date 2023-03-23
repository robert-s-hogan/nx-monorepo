import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Campaign } from './campaign.entity';

import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignRepository: Repository<Campaign>
  ) {}
  async create(
    createCampaignDto: CreateCampaignDto
  ): Promise<{ campaign: Campaign }> {
    // Perform calculations and create the campaign
    const newCampaign = this.campaignRepository.create(createCampaignDto);
    const createdCampaign = await this.campaignRepository.save(newCampaign);

    return {
      campaign: createdCampaign,
    };
  }

  async findAll(): Promise<{ campaigns: Campaign[] }> {
    const campaigns = await this.campaignRepository.find();

    return {
      campaigns,
    };
  }
  async findOne(id: number): Promise<{ campaign: Campaign }> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: id },
    });

    return {
      campaign,
    };
  }

  async update(
    id: number,
    updateCampaignDto: UpdateCampaignDto
  ): Promise<{ campaign: Campaign }> {
    const updatedCampaign = await this.campaignRepository.save({
      id,
      ...updateCampaignDto,
    });

    return {
      campaign: updatedCampaign,
    };
  }

  async remove(id: number): Promise<{ campaign: Campaign }> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: id },
    });

    await this.campaignRepository.remove(campaign);

    return {
      campaign,
    };
  }

  async removeAll(): Promise<{ campaigns: Campaign[] }> {
    const campaigns = await this.campaignRepository.find();
    await this.campaignRepository.remove(campaigns);

    return {
      campaigns,
    };
  }

  async findByUserId(userId: number): Promise<{ campaigns: Campaign[] }> {
    const campaigns = await this.campaignRepository.find({
      where: { user: { id: userId } },
    });

    return {
      campaigns,
    };
  }

  async findByUserIdAndCampaignId(
    userId: number,
    campaignId: number
  ): Promise<{ campaign: Campaign }> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: campaignId, user: { id: userId } },
    });

    return {
      campaign,
    };
  }

  async updateByUserIdAndCampaignId(
    userId: number,
    campaignId: number,
    updateCampaignDto: UpdateCampaignDto
  ): Promise<{ campaign: Campaign }> {
    const updatedCampaign = await this.campaignRepository.save({
      id: campaignId,
      ...updateCampaignDto,
    });

    return {
      campaign: updatedCampaign,
    };
  }

  async removeByUserIdAndCampaignId(
    userId: number,
    campaignId: number
  ): Promise<{ campaign: Campaign }> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: campaignId, user: { id: userId } },
    });
    await this.campaignRepository.remove(campaign);

    return {
      campaign,
    };
  }

  async removeAllByUserId(userId: number): Promise<{ campaigns: Campaign[] }> {
    const campaigns = await this.campaignRepository.find({
      where: { user: { id: userId } },
    });
    await this.campaignRepository.remove(campaigns);

    return {
      campaigns,
    };
  }
}
