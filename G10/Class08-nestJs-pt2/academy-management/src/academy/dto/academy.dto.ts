import { IsString } from 'class-validator';
import { CreateAcademyDto } from './create-academy.dto';

export class AcademyDto extends CreateAcademyDto {
  @IsString()
  readonly id: string;
}
