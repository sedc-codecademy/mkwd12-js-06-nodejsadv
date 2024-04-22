import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Task managemet')
    .setDescription('Application for managing tasks')
    .setVersion('1.0')
    .addTag('tasks')
    .build();

  // const options: SwaggerDocumentOptions = {
  //   ignoreGlobalPrefix: false,
  // };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
