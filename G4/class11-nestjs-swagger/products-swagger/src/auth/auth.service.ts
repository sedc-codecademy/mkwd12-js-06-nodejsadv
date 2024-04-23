import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcryptjs';
import { CredentialsDto } from './dtos/credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    // Inject the jwtService to be able to use the methods inside for working with tokens
    private jwtService: JwtService,
    private configService: ConfigService,
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

    const refreshToken = await this.jwtService.signAsync(
      { id: foundUser.id },
      {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
        expiresIn: '7d',
      },
    );

    await this.usersService.saveRefreshToken(foundUser.id, refreshToken);

    delete foundUser.refreshTokens;
    delete foundUser.password;

    return {
      user: foundUser,
      token,
      refreshToken,
    };
  }
  async logoutUser(refreshToken: string) {
    try {
      //1. Verify refresh token
      const { id } = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      });

      //2. Delete refresh token
      await this.usersService.deleteRefreshToken(id, refreshToken);
    } catch (error) {
      console.log(error);
      throw new BadRequestException("Can't logout user");
    }
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      //1. Verify refresh token
      const { id } = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      });
      //2. Find user in db
      const foundUser = await this.usersService.getUserById(id);

      //3. Check if token exists in db
      const tokenExists = foundUser.refreshTokens.some(
        (token) => token === refreshToken,
      );

      if (!tokenExists) throw new Error();

      //4. Generate new tokens
      const newAccessToken = await this.jwtService.signAsync({
        id: foundUser.id,
      });

      const newRefreshToken = await this.jwtService.signAsync(
        { id: foundUser.id },
        {
          secret: this.configService.get('REFRESH_TOKEN_SECRET'),
          expiresIn: '7d',
        },
      );

      //5. Delete old refresh token and save new refresh token in db
      await this.usersService.deleteRefreshToken(foundUser.id, refreshToken);
      await this.usersService.saveRefreshToken(foundUser.id, newRefreshToken);

      return {
        token: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
