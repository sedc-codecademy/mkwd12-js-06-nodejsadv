import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  date: Date;

  //eager: true joins and combines all tables without needing to use relations object in find methods
  @ManyToOne(() => User, (user) => user.orders)
  //   @JoinColumn() //Creates a column for the foreign key for the "one" in the relation but can be omitted
  user: User;
}
