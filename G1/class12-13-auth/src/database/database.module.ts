import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // we add ConfigModule to reach to ConfigService
      inject: [ConfigService], // we add ConfigService to fetch .env variables
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_{PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        autoLoadEntities: true, // same as commented line above
        synchronize: true, // recreates the database tables and deletes all data if necessary on each entity change. do not use on prod
      }),
    }),
  ],
})
export class DatabaseModule {}
