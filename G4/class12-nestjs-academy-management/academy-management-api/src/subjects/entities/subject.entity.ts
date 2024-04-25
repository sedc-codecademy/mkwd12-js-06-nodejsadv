import { Student } from 'src/students/entities/student.entity';
import { Trainer } from 'src/trainers/entities/trainer.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  numberOfClasses: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(() => Trainer)
  mentor: Trainer;

  @ManyToOne(() => Trainer)
  assistant: Trainer;

  @ManyToMany(() => Student, (student) => student.subjects)
  @JoinTable()
  students: Student[];
}
