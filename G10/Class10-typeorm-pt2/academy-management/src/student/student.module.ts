import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentDetail } from 'src/student-details/entities/student-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentDetail])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
