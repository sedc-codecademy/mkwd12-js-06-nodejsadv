import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { ClubsModule } from './clubs/clubs.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, PlayersModule, ClubsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
