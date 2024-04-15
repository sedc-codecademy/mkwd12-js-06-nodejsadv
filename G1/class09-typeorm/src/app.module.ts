import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { ClubsModule } from './clubs/clubs.module';

@Module({
  imports: [PlayersModule, ClubsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
