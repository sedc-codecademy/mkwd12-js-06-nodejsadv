import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const refreshToken = req.headers['refresh-token'];

    if (refreshToken) {
      try {
        //1. Verify refresh token
        const { id } = await this.jwtService.verifyAsync(
          refreshToken.toString(),
          {
            secret: this.configService.get('REFRESH_TOKEN_SECRET'),
          },
        );
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
        await this.usersService.deleteRefreshToken(
          foundUser.id,
          refreshToken.toString(),
        );
        await this.usersService.saveRefreshToken(foundUser.id, newRefreshToken);

        res.set('access-token', newAccessToken);
        res.set('refresh-token', newRefreshToken);
      } catch (error) {
        console.error(error);
      }
    }

    console.log('In middleware');

    next();
  }
}
