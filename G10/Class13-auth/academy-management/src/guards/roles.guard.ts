import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  // The Reflector class is part of the core NestJS library and is used to retrieve metadata associated with classes, methods, and their decorators
  // The Reflector is used to retrieve metadata regarding the role of the user from the handler and class associated with the current execution context
  // If the user does not own the requested role, every incoming request undergoes JWT authentication.
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const allowedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler,
    );
    if (!allowedRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    return allowedRoles.includes(user.role);
  }
}
