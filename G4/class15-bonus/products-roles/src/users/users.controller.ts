import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') userId: string) {
    return this.usersService.getUserById(userId);
  }

  @Get(':id/details')
  getUserOrders(@Param('id') userId: string) {
    return this.usersService.getUserDetails(userId);
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateUser(@Param('id') userId: string, @Body() updateData: UpdateUserDto) {
    return this.usersService.updateUser(userId, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(@Param('id') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
