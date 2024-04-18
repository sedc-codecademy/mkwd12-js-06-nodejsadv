import { Order } from 'src/orders/entities/order.entity';
import { UserAddress } from 'src/user-address/entities/user-address.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToOne(() => UserAddress, (userAddress) => userAddress.user)
  userAddress: UserAddress;
}
