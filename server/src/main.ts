import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.HOST,
    exposedHeaders: ['x-total-count'],
  });

  await app.listen(8080);
};

bootstrap();
