import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { UserResponseDto } from 'src/user/dtos/user-response.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register({
    username,
    password,
    role,
  }: RegisterDto): Promise<UserResponseDto> {
    const existingUser = await this.userService.getUserByUsername(username);

    if (existingUser) {
      throw new BadRequestException(
        `User with username ${username} already exists`,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      username,
      password: hashedPassword,
      role,
    };

    return this.userService.create(user);
  }

  async login({ username, password }: LoginDto): Promise<any> {
    const existingUser =
      await this.userService.getUserByUsernameWithPassword(username);

    if (!existingUser) {
      throw new BadRequestException(`Invalid credentials`);
    }

    const passwordsAreMatching = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!passwordsAreMatching) {
      throw new BadRequestException('Invalid credentials');
    }

    return existingUser;
  }
}
