import { Injectable } from '@nestjs/common';
import { ClubCreateDto } from './dtos/club-create.dto';
import { ClubResponseDto } from './dtos/club-response.dto';
import { Club } from './club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club) private clubRepository: Repository<Club>,
  ) {}

  async createClub(body: ClubCreateDto): Promise<Club> {
    const newClub = this.clubRepository.create(body);
    return this.clubRepository.save(newClub);
  }
}
