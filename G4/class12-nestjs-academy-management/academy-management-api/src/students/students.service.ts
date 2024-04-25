import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { StudentFilters } from './interfaces/students-filters';
import { AllStudentsResponse } from './interfaces/students.interface';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private studentsRepo: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentsRepo.save(createStudentDto);
  }

  async findAll(filters: StudentFilters): Promise<AllStudentsResponse> {
    const studentsFindConfig: FindManyOptions<Student> = {
      take: filters.maxResults,
      skip: filters.firstResult,
    };

    const students = await this.studentsRepo.find(studentsFindConfig);

    const count = await this.studentsRepo.count();

    console.log(students);

    return { students, totalRecords: count };
  }

  async findOne(id: number) {
    try {
      const foundStudent = await this.studentsRepo.findOneOrFail({
        where: { id },
        relations: {
          subjects: true,
        },
      });

      return foundStudent;
    } catch (error) {
      throw new NotFoundException('Student Not Found!');
    }
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
