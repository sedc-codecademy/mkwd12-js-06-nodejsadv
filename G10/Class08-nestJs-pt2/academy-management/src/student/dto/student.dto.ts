import { IsString } from 'class-validator';
import { CreateStudentDto } from './create-student.dto';

export class StudentDto extends CreateStudentDto {
  @IsString()
  readonly id: string;
}
