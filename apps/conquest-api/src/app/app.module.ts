import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

//controllers
import { AppController } from './app.controller';

//services
import { AppService } from './app.service';

//modules
import { CampaignModule } from '../campaign/campaign.module';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { EncounterModule } from '../encounter/encounter.module';
import { CharacterAdvancementModule } from '../character-advancement/character-advancement.module';

import { ormconfig } from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/.env',
    }),
    ScheduleModule.forRoot(),
    UserModule,
    CampaignModule,
    AuthModule,
    EncounterModule,
    CharacterAdvancementModule,
    TypeOrmModule.forRootAsync({
      useFactory: ormconfig,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static forRoot(options: TypeOrmModuleOptions) {
    return {
      module: AppModule,
      providers: [
        {
          provide: 'CONQUEST_API_OPTIONS',
          useValue: options,
        },
      ],
    };
  }
}
