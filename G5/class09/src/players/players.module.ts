import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player.entity';

@Module({
  // This method configures the TypeOrmModule to provide access to the Player entity. 
  // It's a way of telling NestJS that you want to use TypeORM to interact with the Player entity within the context of this module.
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
