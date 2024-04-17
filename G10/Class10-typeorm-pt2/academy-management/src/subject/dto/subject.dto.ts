import { IsNumber } from 'class-validator';
import { CreateSubjectDto } from './create-subject.dto';

export class SubjectDto extends CreateSubjectDto {
  @IsNumber()
  readonly id: number;
}
