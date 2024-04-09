import { Injectable } from '@nestjs/common';

// DECORATOR
// The @Injectable() decorator tells the dependency injection mechanism
// that this class is injectable, meaning it can be injected in controllers, other services etc.

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from NestJS';
  }
}
