import { IsDateString, IsString, MaxLength } from 'class-validator';

export class CreateStudentDetailDto {
  @IsString()
  @MaxLength(200)
  readonly address: string;

  @IsString()
  @MaxLength(30)
  telephone: string;

  @IsDateString()
  dateOfBirth: Date;
}
