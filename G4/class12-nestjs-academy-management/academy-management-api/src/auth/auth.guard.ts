import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const req: Request = context.switchToHttp().getRequest();

      const authorizationHeader = req.headers['authorization'];

      if (!authorizationHeader) throw new Error();

      const token = authorizationHeader.split(' ')[1];

      const { id } = await this.jwtService.verifyAsync(token);

      await this.usersService.findUserById(id);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
