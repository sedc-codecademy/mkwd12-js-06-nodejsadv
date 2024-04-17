import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDetailDto } from './create-student-detail.dto';

export class UpdateStudentDetailDto extends PartialType(CreateStudentDetailDto) {}
