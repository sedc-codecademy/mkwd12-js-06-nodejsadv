import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerCreateDto } from './dtos/player-create.dto';
import { PlayerResponseDto } from './dtos/player-response.dto';
import { PlayerUpdateDto } from './dtos/player-update.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class PlayersService {
  players: PlayerResponseDto[] = [];

  getPlayers(): PlayerResponseDto[] {
    return this.players;
  }

  createPlayer(body: PlayerCreateDto): PlayerResponseDto {
    const player = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } satisfies PlayerResponseDto;

    this.players.push(player);

    return player;
  }

  updatePlayer(id: string, body: PlayerUpdateDto): PlayerResponseDto {
    const index = this.players.findIndex((p) => p.id === id);

    if (index < 0) {
      throw new NotFoundException(`Player with ${id} doesn't exist!`);
    }

    this.players[index] = {
      ...this.players[index],
      ...body,
      updatedAt: new Date(),
    };

    return this.players[index];
  }

  deletePlayer(id: string): void {
    this.players = this.players.filter((p) => p.id !== id);
  }
}
