import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Seniority } from 'src/util/seniority.enum';

export class CreateTrainerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  readonly age: number;

  @IsNotEmpty()
  @IsEnum(Seniority)
  readonly seniority: Seniority;

  @IsNotEmpty()
  @IsNumber()
  readonly academyId: number;
}
