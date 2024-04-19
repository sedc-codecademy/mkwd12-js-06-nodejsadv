import { Injectable } from '@nestjs/common';
import { ClubCreateDto } from './dtos/club-create.dto';
import { ClubResponseDto } from './dtos/club-response.dto';
import { Club } from './club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClubUpdateDto } from './dtos/club-update.dto';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club) private clubRepository: Repository<Club>,
  ) {}

  async getClubs(): Promise<Club[]> {
    return this.clubRepository.find({
      relations: ['questions'],
    });
  }

  async createClub(body: ClubCreateDto): Promise<Club> {
    const newClub = this.clubRepository.create(body);
    return this.clubRepository.save(newClub);
  }

  async updateClub(id: string, body: ClubUpdateDto): Promise<Club> {
    const team = await this.clubRepository.findOneByOrFail({ id });
    const updatedTeam = this.clubRepository.merge(team, body);
    return this.clubRepository.save(updatedTeam);
  }

  async deleteClub(id: string): Promise<void> {
    // await this.clubRepository.delete(id); // hard delete - real DB deletion

    await this.clubRepository.softDelete(id); // adds value to deletedAt column
  }
}
