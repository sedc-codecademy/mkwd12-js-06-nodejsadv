import { Academy } from 'src/academy/entities/academy.entity';
import { Seniority } from 'src/util/seniority.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: Seniority,
  })
  seniority: Seniority;

  @ManyToOne(() => Academy, (academy) => academy.trainers)
  @JoinColumn({ name: 'academyId' })
  academy: Academy;

  @Column()
  academyId: number;
}
