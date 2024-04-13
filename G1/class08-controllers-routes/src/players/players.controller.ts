import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('/')
  getPlayers() {
    return this.playersService.getPlayers();
  }

  @Post('/')
  createPlayer(@Body() body: any) {
    return this.playersService.createPlayer(body);
  }
}
