import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    // return this.studentRepository.find();
    return this.studentRepository.find({ relations: { studentDetail: true } });
  }

  async findOne(id: number): Promise<Student> {
    // return this.studentRepository.findOneBy({ id });
    return this.studentRepository.findOne({
      where: { id },
      relations: { studentDetail: true },
    });
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto);
    await this.studentRepository.save(student);
    return student;
  }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    let student = await this.studentRepository.findOneBy({ id });
    student = this.studentRepository.merge(student, updateStudentDto);
    await this.studentRepository.save(student);
    return student;
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
