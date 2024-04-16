import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademyModule } from './academy/academy.module';
import { SubjectModule } from './subject/subject.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

// @nestjs/config is a configuration module for Nest based on the dotenv

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // If set to true, you will not need to import ConfigModule in other modules once it's been loaded in the root module (e.g., AppModule)
      envFilePath: '.env', // By default, the package looks for a .env file in the root directory of the application, so this is now optional
      // ignoreEnvFile - if set to true, it will disable reading of the .env file
    }),
    AcademyModule,
    SubjectModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
