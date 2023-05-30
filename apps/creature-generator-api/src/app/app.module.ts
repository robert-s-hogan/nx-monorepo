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
      host: 'creature-generator.c4ri6zxrbjnq.us-west-2.rds.amazonaws.com',
      port: 5432,
      username: 'cg_admin',
      password: 'conquest-creature-generator',
      database: 'creature_db',
      entities: [Creature, Action, SpecialAbility],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Creature, Action, SpecialAbility]), // new
  ],
  controllers: [AppController, CreatureController], // new
  providers: [AppService, CreatureService], // new
})
export class AppModule {}
