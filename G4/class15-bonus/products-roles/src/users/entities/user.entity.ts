import { Exclude } from 'class-transformer';
import { Order } from 'src/orders/entities/order.entity';
import { RoleType } from 'src/roles/roles.model';
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

  @Exclude()
  @Column()
  password: string;

  @Column({
    enum: RoleType,
  })
  role: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column('text', {
    array: true,
    default: [],
    nullable: true,
  })
  refreshTokens: string[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToOne(() => UserAddress, (userAddress) => userAddress.user)
  userAddress: UserAddress;
}
