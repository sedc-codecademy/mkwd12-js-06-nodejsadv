import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PlayersModule } from './players/players.module';
import { ClubsModule } from './clubs/clubs.module';

@Module({
  imports: [DatabaseModule, PlayersModule, ClubsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
