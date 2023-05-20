import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from '../ormconfig.json';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadModule } from '../lead/lead.module';

@Module({
  imports: [TypeOrmModule.forRoot(config as any), LeadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
