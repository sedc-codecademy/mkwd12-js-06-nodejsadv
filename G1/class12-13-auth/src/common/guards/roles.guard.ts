import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permittedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    console.log('permitted roles', permittedRoles);

    if (!permittedRoles?.length) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    console.log('user roles', user);

    return permittedRoles.includes(user.role);
  }
}
