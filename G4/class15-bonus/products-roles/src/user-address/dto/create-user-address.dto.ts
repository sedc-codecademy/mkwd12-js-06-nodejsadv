import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserAddressDto {
  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  street: string;

  @IsNumber()
  zipCode: number;

  @IsString()
  @IsOptional()
  user: string;
}
