import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

// !NOTE: This strategy is not used in the app, it can be added to any controller to use it.
// example: we can create a guard to protect a route and use this strategy to check if the user is valid / existing.
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    // The LocalStrategy constructor is called when the LocalStrategy is initialized.
    super();
  }

  // The validate method is called by Passport after the user is authenticated.
  // We use the validate method to check if the user exists in the database.
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
