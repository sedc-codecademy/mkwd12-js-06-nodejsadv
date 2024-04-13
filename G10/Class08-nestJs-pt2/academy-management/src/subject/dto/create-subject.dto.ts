import { IsEnum, IsInt, IsString, Min } from 'class-validator';
import { Difficulty } from 'src/util/difficulty.enum';

export class CreateSubjectDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(4)
  readonly numberOfClasses: number;

  @IsEnum(Difficulty)
  readonly difficulty: Difficulty;

  @IsString()
  readonly academyId: string;

  @IsString()
  readonly trainerId: string;
}
