import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// The guard extends AuthGuard configured with 'jwt', which is a strategy registered in the auth module in the application.
// This strategy is defined to handle JWT validation logic, including extracting the token from requests and verifying it

// The ExecutionContext provides details about the execution process, including the request and response objects, allowing the guard to perform context-specific logic if necessary
// This method is a hook provided by NestJS to determine whether the current request is allowed to proceed.
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // The canActivate methot from the parent class internally uses Passport to validate the JWT based on the configured strategy
    return super.canActivate(context);
  }

  // This method is used to handle the result of the JWT validation attempt
  handleError(error, user) {
    if (error || !user) {
      throw error || new UnauthorizedException();
    }
    return user;
  }
}
