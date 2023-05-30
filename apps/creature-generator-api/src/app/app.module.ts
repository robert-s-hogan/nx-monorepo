// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Creature } from '../entities/creature.entity';
import { Action } from '../entities/action.entity';
import { SpecialAbility } from '../entities/special-ability.entity';
import { CreatureController } from '../creature/creature.controller'; // new
import { CreatureService } from '../creature/creature.service'; // new

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.AWS_USER_NAME || 'postgres',
      password: process.env.AWS_PASSWORD || 'postgres',
      database: process.env.AWS_DATABASE || 'creature-generator',
      entities: [Creature, Action, SpecialAbility],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Creature, Action, SpecialAbility]), // new
  ],
  controllers: [AppController, CreatureController], // new
  providers: [AppService, CreatureService], // new
})
export class AppModule {}
