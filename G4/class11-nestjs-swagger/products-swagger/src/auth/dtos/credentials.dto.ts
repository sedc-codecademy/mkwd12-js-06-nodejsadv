import { IsString } from 'class-validator';

export class CredentialsDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
