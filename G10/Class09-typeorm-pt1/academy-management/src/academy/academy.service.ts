import { Injectable } from '@nestjs/common';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';

@Injectable()
export class AcademyService {
  create(createAcademyDto: CreateAcademyDto) {
    return 'This action adds a new academy';
  }

  findAll() {
    return `This action returns all academy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academy`;
  }

  update(id: number, updateAcademyDto: UpdateAcademyDto) {
    return `This action updates a #${id} academy`;
  }

  remove(id: number) {
    return `This action removes a #${id} academy`;
  }
}
