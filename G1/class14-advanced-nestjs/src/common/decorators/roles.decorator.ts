import { SetMetadata } from '@nestjs/common';

// Roles which are permitted to use the endpoint
// User should have one of the specified roles
// If User has one of the specified roles => He can use the route
// If User DOESN'T have NONE of the specified roles => He CAN'T use the route
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
