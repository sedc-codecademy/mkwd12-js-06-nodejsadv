import {
  IsString,
  IsInt,
  Min,
  MinLength,
  ValidateNested,
  IsObject,
  IsNotEmpty,
} from 'class-validator';
import { CreateStudentDetailDto } from '../../student-details/dto/create-student-detail.dto';
import { Type } from 'class-transformer';
export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsInt()
  @Min(18)
  readonly age: number;

  @IsNotEmpty()
  @IsInt()
  readonly academyId: number;

  @ValidateNested()
  @IsObject()
  @Type(() => CreateStudentDetailDto)
  studentDetail: CreateStudentDetailDto;
}
