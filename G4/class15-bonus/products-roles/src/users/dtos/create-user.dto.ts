import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsObject,
  IsString,
  Length,
  Min,
  ValidateNested,
} from 'class-validator';
import { RoleType } from 'src/roles/roles.model';
import { CreateUserAddressDto } from 'src/user-address/dto/create-user-address.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 30)
  password: string;

  @IsString()
  role: RoleType;

  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  @Min(16)
  age: number;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateUserAddressDto)
  userAddress: CreateUserAddressDto;
}
