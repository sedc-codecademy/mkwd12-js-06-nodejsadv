import { PartialType } from '@nestjs/swagger';
import { CreateStudentDetailDto } from './create-student-detail.dto';

export class UpdateStudentDetailDto extends PartialType(
  CreateStudentDetailDto,
) {}
