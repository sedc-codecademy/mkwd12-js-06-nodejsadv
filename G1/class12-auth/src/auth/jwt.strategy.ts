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
    // The JwtStrategy constructor is called when the JwtStrategy is initialized.
    // We configure the JwtStrategy with the options object.
    // The options object contains the secret key used to sign the token and the method to extract the token from the request.
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate({ username, sub, role }: JwtStrategyPayload) {
    // This method is called by Passport after the token is validated.
    // The parameters are the decoded token payload. (check login method to see how we created the token payload)

    // This returned value is attached to the request object as req.user.
    return {
      username,
      userId: sub,
      role,
    };
  }
}
