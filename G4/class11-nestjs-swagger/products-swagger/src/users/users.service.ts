import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserAddressService } from 'src/user-address/user-address.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    private userAddressService: UserAddressService,
  ) {}

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

  getUserByEmail(email: string) {
    return this.usersRepo.findOneBy({ email });
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

  async createUser(createUserDto: CreateUserDto) {
    try {
      const { userAddress, ...userData } = createUserDto;

      //1. Save user in database
      const newUser = await this.usersRepo.save(userData);

      //2. Save address in databse
      await this.userAddressService.create({
        ...userAddress,
        user: newUser.id,
      });

      return newUser;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateUser(id: string, updateData: UpdateUserDto) {
    const foundUser = await this.getUserById(id);

    Object.assign(foundUser, updateData);

    console.log(updateData);

    console.log(foundUser);

    await this.usersRepo.save(foundUser);
  }

  async saveRefreshToken(userId: string, refreshToken: string) {
    const foundUser = await this.getUserById(userId);

    foundUser.refreshTokens.push(refreshToken);

    await this.usersRepo.save(foundUser);
  }

  async deleteRefreshToken(userId: string, refreshToken: string) {
    const foundUser = await this.getUserById(userId);

    foundUser.refreshTokens = foundUser.refreshTokens.filter(
      (token) => token !== refreshToken,
    );

    await this.usersRepo.save(foundUser);
  }

  async deleteUser(id: string) {
    const foundUser = await this.getUserById(id);

    await this.usersRepo.remove(foundUser);
  }
}
