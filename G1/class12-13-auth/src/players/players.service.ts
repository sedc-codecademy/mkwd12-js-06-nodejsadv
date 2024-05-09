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
    // this is the object that is used to search / filter the players.
    // We start with an empty object and add the filters based on the query parameters.
    let whereQuery = {} satisfies FindOptionsWhere<Player>;

    if (name) {
      // ILike is a case-insensitive version of the Like operator which is used to search for a pattern in a string.
      // We use the % wildcard to search for any string that contains the name.
      whereQuery = {
        ...whereQuery,
        name: ILike(`%${name}%`),
      };
    }

    // If both minAge and maxAge are provided, we use the Between operator to search for players with an age between minAge and maxAge.
    // ex: age BETWEEN minAge AND maxAge (age >= minAge AND age <= maxAge)
    if (minAge && maxAge) {
      whereQuery = {
        ...whereQuery,
        age: Between(minAge, maxAge),
      };
      // If only minAge is provided, we use the MoreThanOrEqual operator to search for players with an age greater than or equal to minAge.
    } else if (minAge) {
      whereQuery = {
        ...whereQuery,
        age: MoreThanOrEqual(minAge),
      };
      // If only maxAge is provided, we use the LessThanOrEqual operator to search for players with an age less than or equal to maxAge.
    } else if (maxAge) {
      whereQuery = {
        ...whereQuery,
        age: LessThanOrEqual(maxAge),
      };
    }

    // If position is provided, we match the position exactly as it's an enum.
    if (position) {
      whereQuery = {
        ...whereQuery,
        position,
      };
    }

    // If country is provided, we use the ILike operator to search for players with a country that contains the country string.
    if (country) {
      whereQuery = {
        ...whereQuery,
        country: ILike(`%${country}%`),
      };
    }

    // We use the find method of the playerRepository to search for players based on the whereQuery object.
    // We also include the club relation to get the club information of the players.
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
