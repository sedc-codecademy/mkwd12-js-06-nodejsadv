import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcryptjs';
import { CredentialsDto } from './dtos/credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    // Inject the jwtService to be able to use the methods inside for working with tokens
    private jwtService: JwtService,
  ) {}

  //1. Register
  async registerUser(userData: CreateUserDto) {
    //Check if the user exists
    const foundUser = await this.usersService.getUserByEmail(userData.email);

    if (foundUser) throw new BadRequestException('Email already exists');

    //Hash the password
    const hashedPassword = await hash(userData.password, 8);

    userData.password = hashedPassword;

    //Save the new user to the database
    await this.usersService.createUser(userData);
  }

  // Credentials

  //2. Login
  async loginUser(credentials: CredentialsDto) {
    const foundUser = await this.usersService.getUserByEmail(credentials.email);

    if (!foundUser) throw new UnauthorizedException('Invalid Credentials');

    const isPasswordValid = await compare(
      credentials.password,
      foundUser.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid Credentials');

    const token = await this.jwtService.signAsync({ id: foundUser.id });

    return {
      user: foundUser,
      token,
    };
  }
}
