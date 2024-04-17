import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // localhost:3000/academy ==> localhost:3000/api/academy
  await app.listen(4000);
}
bootstrap();
