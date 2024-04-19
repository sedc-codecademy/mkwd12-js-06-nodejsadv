import { Injectable } from '@nestjs/common';
import { ClubCreateDto } from './dtos/club-create.dto';
import { Club } from './club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClubUpdateDto } from './dtos/club-update.dto';

@Injectable()
export class ClubsService {
  constructor() {}

//   async getClubs(): Promise<Club[]> {}

//   async createClub(body: ClubCreateDto): Promise<Club> {}

//   async updateClub(id: string, body: ClubUpdateDto): Promise<Club> { }

//   async deleteClub(id: string): Promise<void> { }
}