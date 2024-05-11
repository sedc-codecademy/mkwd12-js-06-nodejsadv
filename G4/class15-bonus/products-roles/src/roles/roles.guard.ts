import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.get(Roles, context.getHandler());

    if (!role) return true;

    const request = context.switchToHttp().getRequest();

    const user = request.user;

    console.log('Decorator role', role);
    console.log('User object role', user.role);

    if (user.role !== role) return false;

    return true;
  }
}
