import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Lead } from './lead.entity';

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead)
    private leadsRepository: Repository<Lead>
  ) {}

  findAll(): Promise<Lead[]> {
    return this.leadsRepository.find();
  }

  // other CRUD operations go here
}
