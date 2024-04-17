import { Injectable } from '@nestjs/common';
import { PlayerCreateDto } from './dtos/player-create.dto';
import { PlayerUpdateDto } from './dtos/player-update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersService {
    constructor(
        // Each time we create an instance of the class PlayerService, the constructor funciton is called
        // and with that called a repository related to the entity Player is injected and can be used throught the methods of this instance
        @InjectRepository(Player) private playerRepository: Repository<Player>,
        // Repositories provide methods for performing CRUD (Create, Read, Update, Delete) operations on these entities. You can think of repositories as the interface through which you interact with the underlying database tables.

        // When you define a repository using TypeORM, you are essentially creating an instance of a repository class provided by TypeORM, which gives you methods to interact with database entities.
        // https://orkhan.gitbook.io/typeorm/docs/repository-api

        // By using @InjectRepository(), NestJS takes care of creating an instance of the repository and passing it to the constructor when creating an instance of the service class. This allows you to use the repository instance to interact with the database within your service methods.
    ) {}

    async getPlayers(): Promise<Player[]>{
        return this.playerRepository.find();
    }

    async getPlayer(id: string): Promise<Player> {
        // Finds the first entity that matches given FindOptions. Rejects the returned promise if nothing matches.
        return this.playerRepository.findOneByOrFail({ id }); 
        // Or return this.playerRepository.findOneBy({ id });
    }

    async createPlayer(body: PlayerCreateDto): Promise<Player> {
        const entityPlayer = this.playerRepository.create(body);  // Creating an instance of the class (entity) Player
        return this.playerRepository.save(entityPlayer);
    } 

    async updatePlayer(id: string, body: PlayerUpdateDto): Promise<Player> {
        const player = await this.getPlayer(id);

        const updatePlayer = this.playerRepository.merge(player, body);

        return this.playerRepository.save(updatePlayer);
    }

    async deletePlayer(id: string): Promise<void> {
        await this.playerRepository.delete(id);
    }
}
