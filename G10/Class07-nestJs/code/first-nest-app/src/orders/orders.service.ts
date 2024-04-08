import { Injectable } from '@nestjs/common';
import { orders } from 'data/order';
import { Order } from 'src/interfaces/order.interface';

@Injectable()
export class OrdersService {
    private _orders = orders;

    getAll(): Order[]{
        return this._orders;
    }

    getById(id: number): Order{
        return this._orders.find(order => order.id === id);
    }
}
