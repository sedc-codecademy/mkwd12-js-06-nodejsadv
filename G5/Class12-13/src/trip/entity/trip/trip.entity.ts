import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Status } from './trip.interface';
import { BudgetORMEntity } from 'src/budget/entity/budget.entity';
import { UserORMEntity } from 'src/users/entity/users.entity';

@Entity({ name: 'trip' }) //the name of the table
export class TripORMEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => BudgetORMEntity, (budget) => budget.trip)
  budget: BudgetORMEntity;

  @Column()
  destination: string;

  @Column()
  notes: string;

  @Column()
  status: Status;

  @Column({
    type: 'bigint',
    // length: 10
  })
  startDate: Timestamp; // Timestamp

  @Column({
    type: 'bigint',
  })
  endDate: Timestamp; // Timestamp

  @Column({
    type: 'bigint',
  })
  createdAt: Timestamp; // Timestamp

  @Column({
    type: 'bigint',
    nullable: true,
  })
  updatedAt: Timestamp | null; // Timestamp

  @ManyToOne(() => UserORMEntity, (user) => user.trips)
  user: UserORMEntity;
}
