import { Module } from '@nestjs/common';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './club.entity';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { Player } from '../players/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Club, Player])], // we tell typeorm to use entity CLub in this feature
  controllers: [ClubsController, GamesController],
  providers: [ClubsService, GamesService],
})
export class ClubsModule {}
