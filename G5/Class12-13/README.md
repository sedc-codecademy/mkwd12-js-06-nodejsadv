````markdown
# JWT Authentication in NestJS

## What is JWT?

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

## How JWT Works

1. **User Requests Access**: The user makes a login request with their credentials.
2. **Application Validates Credentials**: The server validates the credentials and generates a JWT token if the credentials are correct.
3. **Token is Sent to User**: The server sends the token back to the user.
4. **User Stores the Token**: The user stores the token locally (usually in local storage) and includes it in the header of subsequent request headers.
5. **Token Validation**: On receiving a request with a JWT, the server validates the token. If valid, it processes the request; if not, it denies access.

## Implementing JWT Authentication in NestJS

### Step 1: Install Required Packages

You will need the `@nestjs/jwt`.

```bash
npm install @nestjs/jwt
```
````

### Step 2: Set Up the Auth Module

Create an Auth module that will handle authentication-related functionality.

```typescript
// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '10min' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
```

### Step 3: Create Auth Service

The AuthService will handle the logic for generating JWT tokens after validating user credentials.

```typescript
// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Example user validation
    const user = { userId: 1, username: 'test', password: 'test' }; // should be your user lookup logic
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
```

### Step 4: Implement Auth Controller

The AuthController will handle requests to your endpoints for logging in.

```typescript
// auth.controller.ts
import { Controller, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
```

### Step 5: Create Products Controller

The ProductsController will handle shop-specific functionalities, such as fetching products

```typescript
// products.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('products')
export class ProductsController {
  @UseGuards(JwtAuthGuard)
  @Get()
  async getProducts() {
    return [
      { id: '1', title: 'Bananas' },
      { id: '2', title: 'Bread' },
    ];
  }
}
```

### Step 6: Implement JWT Auth Guard

This guard will check if the incoming requests have a valid JWT token.

```typescript
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest(); // native node request object
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const jwtPayload = await this.jwtService.verifyAsync(token, {
        secret: 'your-secret-key',
      });

      return true;
    } catch (error) {
      throw new UnauthorizedException({ message: error.message });
    }
  }

  extractToken(request: Request): string | undefined {
    const authorizationHeader = request.headers.authorization || '';

    const splitedAuthHeader = authorizationHeader.split(' ');

    const [_bearer, token] = splitedAuthHeader;

    return token;
  }
}
```
