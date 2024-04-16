# NestJS Controllers Overview

Controllers in NestJS are responsible for handling incoming requests and returning responses to the client. They act as the traffic cop for incoming client requests and are an integral part of any NestJS application.

## What is a Controller?

In NestJS, a controller is a class annotated with the `@Controller()` decorator, which defines a basic controller that can handle HTTP requests. The controller's purpose is to receive specific requests for specific routes and call service methods to process business rules and data retrieval/manipulation.

## Key Decorators in Controllers

NestJS provides several decorators to ease the development of RESTful APIs. Here are some of the most commonly used:

### @Controller()

- **Purpose**: Declares the class as a controller with an optional route path prefix.
- **Usage**:

  ```typescript
  @Controller('users')
  export class UsersController {}
  ```

### @Get(), @Post(), @Put(), @Delete()

- **Purpose**: Methods within the controller can be decorated with these decorators to handle respective HTTP request methods.
- **Usage**:

  ```typescript
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.create(userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
  ```

### @HttpStatus()

- **Purpose**: Specifies the HTTP status code to be returned by the route handler.
- **Usage**:

  ```typescript
  @Post()
  @HttpCode(201)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  ```

### @Param()

- **Purpose**: Route parameters are essential for handling dynamic values in routes. `@Param()` allows you to access these values.
- **Usage**:

  ```typescript
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user.`;
  }
  ```

### @Body()

- **Purpose**: Extracts and parses the entire body of an incoming request and makes it available as a parameter.
- **Usage**:

  ```typescript
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  ```

### Handling Exceptions

NestJS provides built-in exceptions like `NotFoundException` which can be thrown from your controller methods to send appropriate error responses.

- **Usage**:

  ```typescript
  @Get(':id')
  getUserById(@Param('id') id: string) {
    const user = this.usersService.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return user;
  }
  ```
