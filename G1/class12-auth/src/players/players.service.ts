import { Injectable } from '@nestjs/common';
import { PlayerCreateDto } from './dtos/player-create.dto';
import { PlayerUpdateDto } from './dtos/player-update.dto';
import { PlayerQueryDto } from './dtos/player-query.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { Repository } from 'typeorm';
import { ICurrentUser } from 'src/common/types/current-user.interface';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  async getPlayers(query: PlayerQueryDto): Promise<Player[]> {
    return this.playerRepository.find({
      relations: {
        // same as using relations: ['club']. Just different syntax
        club: true,
      },
    });

    // let filteredPlayers = [...this.players];
    // if (query.position) {
    //   filteredPlayers = filteredPlayers.filter(
    //     (p) => p.position === query.position,
    //   );
    // }
    // if (query.country) {
    //   filteredPlayers = filteredPlayers.filter(
    //     (p) => p.country === query.country,
    //   );
    // }
    // return filteredPlayers;
  }

  async getPlayer(id: string): Promise<Player> {
    return this.playerRepository.findOneByOrFail({ id });
  }

  async createPlayer(
    body: PlayerCreateDto,
    user: ICurrentUser,
  ): Promise<Player> {
    console.log('Created by user:', user);
    const bodyWithCreatedBy = {
      ...body,
      createdBy: user.username,
    };
    const newPlayer: Player = this.playerRepository.create(bodyWithCreatedBy);
    return this.playerRepository.save(newPlayer);
  }

  async updatePlayer(id: string, body: PlayerUpdateDto): Promise<Player> {
    const player = await this.playerRepository.findOneByOrFail({ id });

    const updatedPlayer = this.playerRepository.merge(player, body);

    return this.playerRepository.save(updatedPlayer);
  }

  async deletePlayer(id: string): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
