/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, BadRequestException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './http-exception-filter';
import { ValidationPipe } from '@nestjs/common';
import { config as loadEnvConfig } from 'dotenv';

loadEnvConfig();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: (errors) => {
        const messages = errors.map(
          (error) =>
            `${error.property} - ${Object.values(error.constraints).join(', ')}`
        );
        return new BadRequestException(messages);
      },
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  const config = new DocumentBuilder()
    .setTitle('Your API title')
    .setDescription('Your API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('your-tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
