import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { Difficulty } from 'src/util/difficulty.enum';

export class CreateSubjectDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(0)
  readonly numberOfClasses: number;

  @IsNotEmpty()
  @IsEnum(Difficulty)
  readonly difficulty: Difficulty;

  @IsNotEmpty()
  @IsInt()
  readonly academyId: number;
}
