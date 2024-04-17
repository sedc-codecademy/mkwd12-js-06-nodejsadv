import { IsDateString, IsString, MinLength } from 'class-validator';

export class CreateStudentDetailDto {
  @IsString()
  @MinLength(200)
  readonly address: string;

  @IsString()
  @MinLength(30)
  readonly telephone: string;

  @IsDateString()
  dateOfBirth: Date;
}
