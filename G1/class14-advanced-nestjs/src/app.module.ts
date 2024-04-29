import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { ClubsModule } from './clubs/clubs.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the config module accessible through the whole app
    }),
    DatabaseModule,
    PlayersModule,
    ClubsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
