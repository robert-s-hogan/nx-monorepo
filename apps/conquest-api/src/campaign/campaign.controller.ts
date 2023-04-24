import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { FindOneOptions } from 'typeorm';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { CampaignService } from './campaign.service';

@ApiTags('campaign')
@ApiBearerAuth()
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
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(`ID: ${id}`);
    const options: FindOneOptions = {
      relations: ['encounters'],
    };
    console.log(`Options: ${JSON.stringify(options)}`);
    const campaign = await this.campaignService.findOne(id, options);
    console.log(`Campaign: ${JSON.stringify(campaign)}`);
    const campaignWithEncounterIds = {
      ...campaign,
      encounters: campaign.encounters.map((encounter) => encounter.id),
    };
    console.log(
      `Campaign with encounter IDs: ${JSON.stringify(campaignWithEncounterIds)}`
    );
    return { data: campaignWithEncounterIds };
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
}
