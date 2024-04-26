import { IsEmail, IsString } from 'class-validator';

export class CredentialsDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
