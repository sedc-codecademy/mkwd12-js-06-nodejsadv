import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [DatabaseModule, PlayersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
