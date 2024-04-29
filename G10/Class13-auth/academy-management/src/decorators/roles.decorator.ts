import { SetMetadata } from '@nestjs/common';

// SetMetadata is a function from NestJS that allows you to attach custom metadata to the class or handler it decorates.
// Metadata in NestJS is used at runtime to influence how the application behaves, particularly when it comes to guards or interceptors that check these metadata values to decide how to process a request.

// Roles is a custom decorator function that uses SetMetadata to attach metadata with a key of "roles" and a value that is an array of roles.
// The ...roles syntax allows this decorator to accept any number of arguments and treat them as an array. When you use this decorator, you can pass one or more role strings to it, like @Roles('admin', 'user').

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
