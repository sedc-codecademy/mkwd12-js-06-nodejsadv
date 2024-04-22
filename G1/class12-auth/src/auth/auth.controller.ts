import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Register a new user to the app' })
  @ApiCreatedResponse({ description: 'User successfully registered' })
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post()
  @ApiOperation({ summary: 'Login the user to the platform' })
  @ApiResponse({ status: 200, description: 'User has successfully logged in' })
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}

// register
// username
// password
// role

// login
// username
// password
