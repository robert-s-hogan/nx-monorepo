import { Controller, Get } from '@nestjs/common';

import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {
  constructor(private leadService: LeadService) {}

  @Get()
  findAll() {
    return this.leadService.findAll();
  }

  // other CRUD operations go here
}
