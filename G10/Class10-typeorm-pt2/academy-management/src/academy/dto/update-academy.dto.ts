import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademyDto } from './create-academy.dto';

export class UpdateAcademyDto extends PartialType(CreateAcademyDto) {}
