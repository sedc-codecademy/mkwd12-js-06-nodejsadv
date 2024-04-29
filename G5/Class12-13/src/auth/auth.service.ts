import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignupDTO } from './dto/signup.dto';
import { hash, compare } from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registerUser(userData: SignupDTO): Promise<number> {
    const foundUser = await this.usersService.findOneByEmail(userData.email);

    if (foundUser) {
      throw new BadRequestException(
        `User with email: ${userData.email} already exists`,
      );
    }

    const hashedPassword = await hash(userData.password, 8);

    const userID = await this.usersService.createUser(
      userData.email,
      hashedPassword,
    );

    return userID;
  }

  async signIn(userData: LoginDTO) {
    const foundUser = await this.usersService.findOneByEmail(userData.email);

    if (!foundUser) {
      throw new NotFoundException(
        `User with email: ${userData.email} does not exists`,
      );
    }

    const isPasswordValid = await compare(
      userData.password,
      foundUser.password, // the hashed password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Generate jwt token
    const jwtPayload = { sub: foundUser.id, email: foundUser.email };

    const token = await this.jwtService.signAsync(jwtPayload);

    return {
      token,
    };
  }
}
/**
 * 1. from expense module export expense service
 * 2. in budget module import expense module
 * 3. in budget service import expense service
 */
