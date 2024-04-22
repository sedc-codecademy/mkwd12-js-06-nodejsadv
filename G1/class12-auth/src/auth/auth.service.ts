import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  register(credentials: RegisterDto) {}

  login(credentials: LoginDto) {}
}
