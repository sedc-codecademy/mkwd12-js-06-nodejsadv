import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Difficulty } from 'src/util/difficulty.enum';
import { v4 as uuid } from 'uuid';
import { SubjectDto } from './dto/subject.dto';

@Injectable()
export class SubjectService {
  private _subjects = [
    {
      id: 'eb97fd86-81f1-4d3b-88e6-5921c0a4e0f7',
      name: 'AdvancedNodeJs',
      numberOfClasses: 15,
      difficulty: Difficulty.Hard,
      academyId: 'c24b4a96-4d5b-4fb7-bc90-5a2c4d8c3b8e',
      trainerId: '123',
    },
  ];

  create(body: CreateSubjectDto): SubjectDto {
    const id = uuid();
    const subject = { id, ...body };
    this._subjects.push(subject);
    return subject;
  }

  findAll(difficulty?: string): SubjectDto[] {
    if (difficulty) {
      return this._subjects.filter((subject) =>
        subject.difficulty.toLowerCase().includes(difficulty.toLowerCase()),
      );
    }
    return this._subjects;
  }

  findOne(id: string): SubjectDto {
    return this._subjects.find((subject) => subject.id === id);
  }

  update(id: string, updateSubjectDto: UpdateSubjectDto): SubjectDto {
    const index = this._subjects.findIndex((subject) => subject.id === id);
    if (index !== -1) {
      this._subjects[index] = {
        ...this._subjects[index],
        ...updateSubjectDto,
      };
      return this._subjects[index];
    }
    throw new Error('Update operation failed');
  }

  remove(id: string): boolean {
    const index = this._subjects.findIndex((subject) => subject.id === id);
    if (index !== -1) {
      this._subjects.splice(index, 1);
      return true;
    }
    return false;
  }
}
