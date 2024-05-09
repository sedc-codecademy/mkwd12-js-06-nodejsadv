import { IsEnum } from 'class-validator';
import { Role } from '../../common/enums/role.enum';
import { LoginDto } from './login.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto extends LoginDto {
  @IsEnum(Role)
  @ApiProperty({
    enum: Role,
    description: `Users' role`,
    example: Role.USER,
    default: Role.USER,
  })
  role: Role = Role.USER;
}
