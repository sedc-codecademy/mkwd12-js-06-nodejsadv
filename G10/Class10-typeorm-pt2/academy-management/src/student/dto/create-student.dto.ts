import { IsString, IsInt, Min, MinLength } from 'class-validator';
import { CreateStudentDetailDto } from '../../student-details/dto/create-student-detail.dto';
export class CreateStudentDto {
  @IsString()
  @MinLength(5)
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsInt()
  @Min(18)
  readonly age: number;

  @IsInt()
  readonly academyId: number;

  studentDetail: CreateStudentDetailDto;
}
