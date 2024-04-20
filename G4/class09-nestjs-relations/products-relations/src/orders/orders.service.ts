import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private ordersRepo: Repository<Order>) {}

  getAllOrders() {
    // loadRelationId returns all the foreign key column values, they are not returned by default
    return this.ordersRepo.find({ loadRelationIds: true });
  }

  async getOrderById(id: number) {
    const foundOrder = await this.ordersRepo.findOne({
      where: { id },
      relations: {
        user: true,
        products: true,
      },
    });

    if (!foundOrder) throw new NotFoundException('Order not found');

    return foundOrder;
  }

  createOrder(orderData: CreateOrderDto) {
    const newOrder = this.ordersRepo.create({
      amount: orderData.amount,
      date: orderData.date,
      user: { id: orderData.user },
      products: orderData.products.map((id) => {
        return { id };
      }),
    });

    return this.ordersRepo.save(newOrder);
  }
}
