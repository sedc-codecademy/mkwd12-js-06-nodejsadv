import { IsString } from 'class-validator';
import { CreateSubjectDto } from './create-subject.dto';

export class SubjectDto extends CreateSubjectDto {
  @IsString()
  readonly id: string;
}
