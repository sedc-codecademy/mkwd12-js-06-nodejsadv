import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateTrainerDto {
  @IsString()
  @Length(3, 30)
  firstName: string;

  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsNumber()
  age: number;

  @IsNumber()
  yearsOfExperience: number;

  @IsBoolean()
  isAvailable: boolean;

  @IsEmail()
  email: string;

  @IsString()
  @IsPhoneNumber('MK')
  phoneNumber: string;
}
