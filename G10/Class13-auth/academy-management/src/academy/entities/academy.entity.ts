import { Student } from 'src/student/entities/student.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { Trainer } from 'src/trainer/entities/trainer.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Academy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  price: number;

  @OneToMany(() => Subject, (subject) => subject.academy, { cascade: true })
  subjects: Subject[];

  @OneToMany(() => Student, (student) => student.academy, { cascade: true })
  students: Student[];

  @OneToMany(() => Trainer, (trainer) => trainer.academy, { cascade: true })
  trainers: Trainer[];
}
