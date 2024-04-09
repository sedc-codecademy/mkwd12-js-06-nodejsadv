import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class AppService {
  private users: User[] = []


  getHello(): string {
    return 'Hello World!';
  }

  getFullName():string {
    return "Ivan Apostolovski"
  }

  getUsers(): User[] {
    return this.users
  }

  getUser(): User {
    return {firstName: "John", lastName: "Doe", age:30}
  }

  createUser(userData: User) {
    this.users.push(userData)
  }
}
