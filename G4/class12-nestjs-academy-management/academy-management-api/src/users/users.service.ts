import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async findUserById(id: number) {
    try {
      const foundUser = await this.usersRepo.findOneByOrFail({ id });

      return foundUser;
    } catch (error) {
      throw new NotFoundException('User not found!');
    }
  }

  findUserByEmail(email: string) {
    return this.usersRepo.findOneBy({ email });
  }

  createUser(createUserDto: CreateUserDto) {
    return this.usersRepo.save(createUserDto);
  }
}
