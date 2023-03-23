import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

import { CampaignService } from './campaign.service';
import { Campaign } from './campaign.entity';

@ApiTags('campaign')
@Controller('campaign')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new campaign' })
  @ApiResponse({
    status: 201,
    description: 'The campaign has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.create(createCampaignDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all campaigns' })
  @ApiResponse({
    status: 200,
    description: 'The campaigns have been successfully retrieved.',
  })
  async findAll() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a campaign by ID' })
  @ApiResponse({
    status: 200,
    description: 'The campaign has been successfully retrieved.',
  })
  async findOne(@Param('id') id: number) {
    return this.campaignService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a campaign by ID' })
  @ApiResponse({
    status: 200,
    description: 'The campaign has been successfully updated.',
  })
  async update(
    @Param('id') id: number,
    @Body() updateCampaignDto: UpdateCampaignDto
  ) {
    return this.campaignService.update(id, updateCampaignDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a campaign by ID' })
  @ApiResponse({
    status: 200,
    description: 'The campaign has been successfully deleted.',
  })
  async remove(@Param('id') id: number) {
    return this.campaignService.remove(id);
  }

  // Add other controller methods here if needed
}
