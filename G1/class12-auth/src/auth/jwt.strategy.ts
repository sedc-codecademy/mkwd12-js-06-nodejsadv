import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Role } from 'src/common/enums/role.enum';

type JwtStrategyPayload = {
  username: string;
  role: Role;
  sub: string;
  iat: number;
  exp: number;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate({ username, sub, role }: JwtStrategyPayload) {
    // console.log('JWT Strategy payload', username, sub, role);

    return {
      username,
      userId: sub,
      role,
    };
  }
}
