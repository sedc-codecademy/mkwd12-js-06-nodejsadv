import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  players = [];

  getPlayers() {
    return this.players;
  }

  createPlayer(body) {
    this.players.push(body);

    return body;
  }
}
