import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

// Import the DTOs
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';

// Import the service
import { EncounterService } from './encounter.service';

// Import the entity
import { Encounter } from './encounter.entity';

@ApiTags('encounters')
@Controller('encounters')
export class EncounterController {
  constructor(private readonly encounterService: EncounterService) {}

  @Post()
  @ApiOperation({ summary: 'Create an encounter' })
  @ApiBody({ type: CreateEncounterDto })
  @ApiResponse({
    status: 201,
    description: 'Encounter created',
    type: Encounter,
  })
  create(@Body() createEncounterDto: CreateEncounterDto) {
    return this.encounterService.create(createEncounterDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all encounters' })
  @ApiResponse({
    status: 200,
    description: 'All encounters',
    type: [Encounter],
  })
  findAll() {
    return this.encounterService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single encounter' })
  @ApiParam({ name: 'id', required: true, description: 'Encounter ID' })
  @ApiResponse({ status: 200, description: 'Encounter found', type: Encounter })
  async findOne(@Param('id') id: string) {
    try {
      const encounter = await this.encounterService.findOne(+id);
      if (!encounter) {
        throw new NotFoundException(`Encounter with ID ${id} not found`);
      }
      return { data: encounter };
    } catch (error) {
      console.error('Error in findOne:', error);
      throw error;
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an encounter' })
  @ApiParam({ name: 'id', required: true, description: 'Encounter ID' })
  @ApiBody({ type: UpdateEncounterDto })
  @ApiResponse({
    status: 200,
    description: 'Encounter updated',
    type: Encounter,
  })
  async update(
    @Param('id') id: string,
    @Body() updateEncounterDto: UpdateEncounterDto
  ): Promise<Encounter> {
    const updatedEncounter = await this.encounterService.update(
      +id,
      updateEncounterDto
    );
    return updatedEncounter;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an encounter' })
  @ApiParam({ name: 'id', required: true, description: 'Encounter ID' })
  @ApiResponse({
    status: 200,
    description: 'Encounter deleted',
    type: Encounter,
  })
  async delete(@Param('id') id: string): Promise<Encounter> {
    const deletedEncounter = await this.encounterService.delete(+id);
    return deletedEncounter;
  }
}
