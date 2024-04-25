import { Student } from '../entities/student.entity';

export interface AllStudentsResponse {
  students: Student[];
  totalRecords: number;
}
