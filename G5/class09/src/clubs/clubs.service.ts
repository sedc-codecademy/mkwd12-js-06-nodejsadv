import { Injectable } from '@nestjs/common';
import { ClubCreateDto } from './dtos/club-create.dto';
import { Club } from './club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClubUpdateDto } from './dtos/club-update.dto';

@Injectable()
export class ClubsService {
  constructor(@InjectRepository(Club) private clubRepository: Repository<Club>) {}

  async getClubs(): Promise<Club[]> {
    return this.clubRepository.find({
      relations:["players"]
    })
  }

  async createClub(body: ClubCreateDto): Promise<Club> {
    const newClub = this.clubRepository.create(body)
    return this.clubRepository.save(newClub)
  }

  async updateClub(id: string, body: ClubUpdateDto): Promise<Club> { 
    const club = await this.clubRepository.findOneByOrFail({ id })
    const updatedClub = this.clubRepository.merge(club, body)
    return this.clubRepository.save(updatedClub)
  }

  async deleteClub(id: string): Promise<void> { 
    // await this.clubRepository.delete(id)
    await this.clubRepository.softDelete(id)
    // await this.clubRepository.restore(id)
  }
}