import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  getAllUsers() {
    return this.usersRepo.find({});
  }

  async getUserById(id: string) {
    try {
      const foundUser = await this.usersRepo.findOneByOrFail({ id });

      return foundUser;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async getUserDetails(id: string) {
    try {
      const foundUser = await this.usersRepo.findOne({
        where: { id },
        relations: {
          orders: true,
          userAddress: true,
        },
      });

      return foundUser;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  createUser(userData: CreateUserDto) {
    return this.usersRepo.save(userData);
  }

  async updateUser(id: string, updateData: UpdateUserDto) {
    const foundUser = await this.getUserById(id);

    Object.assign(foundUser, updateData);

    console.log(updateData);

    console.log(foundUser);

    await this.usersRepo.save(foundUser);
  }

  async deleteUser(id: string) {
    const foundUser = await this.getUserById(id);

    await this.usersRepo.remove(foundUser);
  }
}
