import { Body, Controller, Post } from '@nestjs/common';
import { SignupDTO } from './dto/signup.dto';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') // localhost:3000/auth/register
  async register(@Body() signUpDTO: SignupDTO) {
    const userID = await this.authService.registerUser(signUpDTO);

    return userID;
  }

  @Post('login') // localhost:3000/auth/login
  async login(@Body() loginDTO: LoginDTO) {
    const token = await this.authService.signIn(loginDTO);

    return token;
  }
}
