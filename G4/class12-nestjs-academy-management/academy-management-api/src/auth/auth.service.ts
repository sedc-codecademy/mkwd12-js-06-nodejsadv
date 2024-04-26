import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcryptjs';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from './dtos/credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    const userExists = await this.usersService.findUserByEmail(
      createUserDto.email,
    );

    if (userExists) throw new BadRequestException('Email already exists');

    const hashedPassword = await hash(createUserDto.password, 8);

    createUserDto.password = hashedPassword;

    await this.usersService.createUser(createUserDto);
  }

  async loginUser(credentials: CredentialsDto) {
    const user = await this.usersService.findUserByEmail(credentials.email);

    if (!user) throw new UnauthorizedException('Invalid Credentials');

    const isPasswordValid = await compare(credentials.password, user.password);

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid Credentials');

    const accessToken = await this.jwtService.signAsync({ id: user.id });

    return accessToken;
  }
}
