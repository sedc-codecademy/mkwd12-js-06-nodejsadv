import { Reflector } from '@nestjs/core';
import { RoleType } from './roles.model';

export const Roles = Reflector.createDecorator<RoleType>();
