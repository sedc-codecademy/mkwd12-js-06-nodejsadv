import { Academy } from 'src/academy/entities/academy.entity';
import { StudentDetail } from 'src/student-details/entities/student-detail.entity';
import {
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 }) // validates data on a databease level
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column()
  @Check('"age" >= 18')
  age: number;

  @ManyToOne(() => Academy, (academy) => academy.students)
  @JoinColumn({ name: 'academyId' })
  academy: Academy;

  @Column()
  academyId: number;

  @OneToOne(() => StudentDetail, { cascade: true })
  @JoinColumn() // This will create the foreign key in the Student details table. JoinColumn decorator defines who will be the owner of the relationship
  studentDetail: StudentDetail;
}
