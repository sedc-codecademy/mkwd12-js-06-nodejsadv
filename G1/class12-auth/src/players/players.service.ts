import { Injectable } from '@nestjs/common';
import { PlayerCreateDto } from './dtos/player-create.dto';
import { PlayerUpdateDto } from './dtos/player-update.dto';
import { PlayerQueryDto } from './dtos/player-query.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import {
  Between,
  FindOptionsWhere,
  ILike,
  LessThanOrEqual,
  Like,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { ICurrentUser } from 'src/common/types/current-user.interface';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  async getPlayers({
    name,
    minAge,
    maxAge,
    position,
    country,
  }: PlayerQueryDto): Promise<Player[]> {
    let whereQuery = {} satisfies FindOptionsWhere<Player>;

    if (name) {
      whereQuery = {
        ...whereQuery,
        name: ILike(`%${name}%`),
      };
    }

    if (minAge && maxAge) {
      whereQuery = {
        ...whereQuery,
        age: Between(minAge, maxAge),
      };
    } else if (minAge) {
      whereQuery = {
        ...whereQuery,
        age: MoreThanOrEqual(minAge),
      };
    } else if (maxAge) {
      whereQuery = {
        ...whereQuery,
        age: LessThanOrEqual(maxAge),
      };
    }

    if (position) {
      whereQuery = {
        ...whereQuery,
        position,
      };
    }

    if (country) {
      whereQuery = {
        ...whereQuery,
        country: ILike(`%${country}%`),
      };
    }

    return this.playerRepository.find({
      where: whereQuery,
      relations: {
        club: true,
      },
    });
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
