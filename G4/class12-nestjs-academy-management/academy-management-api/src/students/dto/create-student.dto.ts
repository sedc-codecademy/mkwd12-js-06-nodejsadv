import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  @IsPhoneNumber('MK')
  @IsOptional()
  phoneNumber: string;

  @IsBoolean()
  isOnline: boolean;

  @IsString()
  @Length(3, 30)
  city: string;
}
