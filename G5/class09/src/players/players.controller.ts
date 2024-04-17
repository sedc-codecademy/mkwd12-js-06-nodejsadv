import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerCreateDto } from './dtos/player-create.dto';
import { PlayerUpdateDto } from './dtos/player-update.dto';
import { Player } from './player.entity';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('/')
  getPlayers(): Promise<Player[]> {
    return this.playersService.getPlayers();
  }

  @Get('/:id')
  getPlayer(@Param('id') id: string): Promise<Player> {
    return this.playersService.getPlayer(id);
  }

  @Post('/')
  createPlayer(@Body() body: PlayerCreateDto): Promise<Player> {
    return this.playersService.createPlayer(body);
  }

  @Put('/:id')
  updatePlayer(
    @Param('id') id: string,
    @Body() body: PlayerUpdateDto,
  ): Promise <Player> {
    return this.playersService.updatePlayer(id, body);
  }

  @Delete('/:id')
  deletePlayer(@Param('id') id: string): Promise<void> {
    return this.playersService.deletePlayer(id);
  }
}
