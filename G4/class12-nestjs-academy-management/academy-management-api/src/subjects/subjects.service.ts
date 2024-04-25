import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { DeepPartial, Repository } from 'typeorm';
import { AddTrainersToSubjectDto } from './dto/add-trainers-subject.dto';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject) private subjectsRepo: Repository<Subject>,
  ) {}

  create(createSubjectDto: CreateSubjectDto) {
    return this.subjectsRepo.save({
      ...createSubjectDto,
      students: createSubjectDto.students.map((id) => ({ id })),
    });
  }

  findAll() {
    return this.subjectsRepo.find({});
  }

  async findOne(id: number) {
    try {
      const foundSubject = await this.subjectsRepo.findOneOrFail({
        where: { id },
        relations: ['students', 'mentor', 'assistant'],
      });

      return foundSubject;
    } catch (error) {
      throw new NotFoundException('Subject Not Found!');
    }
  }

  async addTrainersToSubject(
    id: number,
    addTrainersToSubjectDto: AddTrainersToSubjectDto,
  ) {
    const foundSubject = (await this.findOne(id)) as DeepPartial<Subject>;

    await this.subjectsRepo.save({
      ...foundSubject,
      mentor: { id: addTrainersToSubjectDto.mentor },
      assistant: { id: addTrainersToSubjectDto.assistant },
    });
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
