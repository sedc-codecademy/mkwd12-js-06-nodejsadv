import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.useGlobalPipes(
    // The line below adds validation for all request bodies in the entire application if you use the class-validator decorators properly
    new ValidationPipe({
      // Whitelist strips all properties from the request body that don't exist in the validated dto
      whitelist: true,
    })
  );

  await app.listen(3000);

  console.log(`Server is up at port: 3000`);
}
bootstrap();
