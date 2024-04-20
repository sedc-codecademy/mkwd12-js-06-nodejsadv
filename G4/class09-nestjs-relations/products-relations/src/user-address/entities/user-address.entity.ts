import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  zipCode: number;

  @OneToOne(() => User, (user) => user.userAddress, {
    onDelete: 'CASCADE',
  })
  //We must use JoinColumn in one to one to set the owner side of the relation ( the table where the foreign key column will be made )
  @JoinColumn()
  user: User;
}
