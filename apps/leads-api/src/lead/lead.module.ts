import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
import { Lead } from './lead.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  providers: [LeadService],
  controllers: [LeadController],
})
export class LeadModule {}
