import { Subject } from 'src/subjects/entities/subject.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  phoneNumber: string;

  @Column()
  isOnline: boolean;

  @Column()
  city: string;

  @ManyToMany(() => Subject, (subject) => subject.students)
  subjects: Subject[];
}
