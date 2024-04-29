import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserORMEntity } from './entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserORMEntity)
    private readonly usersRepository: Repository<UserORMEntity>,
  ) {}

  async findOneByEmail(email: string): Promise<UserORMEntity> {
    const user = await this.usersRepository.findOne({
      where: { email: email },
      relations: ['trips'],
    });

    return user;
  }

  async findOneByID(userID: number): Promise<UserORMEntity> {
    const user = await this.usersRepository.findOne({
      where: { id: userID }, // user.id === userID
      relations: ['trips'],
    });

    return user;
  }

  async createUser(email: string, password: string): Promise<number> {
    const user = this.usersRepository.create({ email, password });

    await this.usersRepository.save(user);

    return user.id;
  }
}
