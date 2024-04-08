import { Injectable } from '@nestjs/common';

@Injectable()
// The @Injectable() decorator tells the dependency injection mechanism
// that this class is injectable, meaning it can be injected in controllers, other services etc.
export class OrdersService {
  getOrders() {
    return ['Order One', 'Order two'];
  }
}
