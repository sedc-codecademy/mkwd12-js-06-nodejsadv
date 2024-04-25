import { IsNumber } from 'class-validator';

export class AddTrainersToSubjectDto {
  @IsNumber()
  mentor: number;

  @IsNumber()
  assistant: number;
}
