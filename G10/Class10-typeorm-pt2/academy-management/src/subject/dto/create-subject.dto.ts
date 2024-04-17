import { IsEnum, IsInt, IsString, Min } from 'class-validator';
import { Difficulty } from 'src/util/difficulty.enum';

export class CreateSubjectDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(0)
  readonly numberOfClasses: number;

  @IsEnum(Difficulty)
  readonly difficulty: Difficulty;

  @IsInt()
  readonly academyId: number;
}
