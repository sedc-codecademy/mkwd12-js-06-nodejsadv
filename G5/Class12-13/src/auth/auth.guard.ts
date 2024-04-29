import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest(); // native node request object
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const jwtPayload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_SECRET'),
      });

      console.log('jwt payload', jwtPayload);
      request['user'] = jwtPayload;
      return true;
    } catch (error) {
      throw new UnauthorizedException({ message: error.message });
    }
  }

  extractToken(request: Request): string | undefined {
    // request.headers.authorization looks as: Bearer our_token
    const authorizationHeader = request.headers.authorization || '';

    // [Bearer, our_token]
    const splitedAuthHeader = authorizationHeader.split(' ');

    // Destructuring on the array, first element is the bearer(token type) and the second is the token itself
    const [_bearer, token] = splitedAuthHeader;

    return token;
  }
}
