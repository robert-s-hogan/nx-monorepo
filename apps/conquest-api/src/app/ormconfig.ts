import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormconfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: 'admin',
  password: 'password',
  database: 'conquest',
  synchronize: true,
  logging: true,
  autoLoadEntities: true,
});
