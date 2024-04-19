import { PartialType } from '@nestjs/swagger';
import { CreateAcademyDto } from './create-academy.dto';

export class UpdateAcademyDto extends PartialType(CreateAcademyDto) {}
