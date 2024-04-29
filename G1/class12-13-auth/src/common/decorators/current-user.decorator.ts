import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ICurrentUser } from '../types/current-user.interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): ICurrentUser | undefined => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
