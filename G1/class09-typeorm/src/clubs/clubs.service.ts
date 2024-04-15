import { Injectable } from '@nestjs/common';
import { ClubCreateDto } from './dtos/club-create.dto';
import { ClubResponseDto } from './dtos/club-response.dto';

@Injectable()
export class ClubsService {
  clubs: ClubResponseDto[] = [];

  createClub(body: ClubCreateDto): ClubResponseDto {
    const club = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } satisfies ClubResponseDto;

    this.clubs.push(club);

    return club;
  }
}
