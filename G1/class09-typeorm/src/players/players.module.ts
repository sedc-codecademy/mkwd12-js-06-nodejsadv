import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
