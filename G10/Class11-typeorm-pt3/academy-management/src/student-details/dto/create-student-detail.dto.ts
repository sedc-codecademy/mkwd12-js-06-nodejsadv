import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateStudentDetailDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  readonly telephone: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;
}
