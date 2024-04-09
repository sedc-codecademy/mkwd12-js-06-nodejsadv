import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/full-name")
  getFullName():string {
    return this.appService.getFullName()
  }

  @Get("/users") 
  getAllUsers() {
    return this.appService.getUsers()
  }

  @Get("/user")
  getUser() {
    return this.appService.getUser()
  }

  @Post("/users") 
  createUser(@Body() body: User) {
    return this.appService.createUser(body)
  }



}
