import { Subject } from 'src/subjects/entities/subject.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  yearsOfExperience: number;

  @Column()
  isAvailable: boolean;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => Subject, (subject) => subject.assistant)
  assistantSubjects: Subject[];

  @OneToMany(() => Subject, (subject) => subject.mentor)
  mentorSubjects: Subject[];
}
