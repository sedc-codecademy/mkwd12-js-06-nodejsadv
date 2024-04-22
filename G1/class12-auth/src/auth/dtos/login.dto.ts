import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: `Users' email address`,
    example: 'ivo.kostovski@gmail.com',
  })
  username: string;

  @IsStrongPassword()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: `Users' strong password`,
    example: 'Pa$$w0rd',
  })
  password: string;
}
