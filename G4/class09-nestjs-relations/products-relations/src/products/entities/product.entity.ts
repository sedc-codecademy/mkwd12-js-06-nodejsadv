import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  // Primary generated column is the main column of the table and this will create ids in ascending order for every new row starting from 1
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
