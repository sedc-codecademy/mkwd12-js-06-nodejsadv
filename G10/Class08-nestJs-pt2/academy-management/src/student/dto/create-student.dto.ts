import { IsEmail, IsNumber, IsString, MinLength, Min } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MinLength(5)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNumber()
  @Min(18)
  readonly age: number;

  @IsString()
  readonly academyId: string;
}
