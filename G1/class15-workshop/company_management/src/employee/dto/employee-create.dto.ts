import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsDate,
  IsDecimal,
  IsBoolean,
  IsEnum,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PayType } from '../../common/pay-type.enum';
import { Transform } from 'class-transformer';

export class EmployeeCreateDto {
  @IsString()
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @IsEmail()
  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @IsPhoneNumber()
  @ApiProperty({ example: '+40712345678' })
  phone: string;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  @ApiProperty({
    example: '2024-05-07T08:10:25.116Z',
    type: 'string',
    format: 'date-time',
  })
  hireDate: Date;

  @IsString()
  @ApiProperty({ example: 'Software Developer' })
  jobTitle: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({
    example: 1000,
    type: 'number',
    format: 'float',
  })
  payRate: number;

  @IsEnum(PayType)
  @ApiProperty({ example: PayType.MONTHLY, default: PayType.MONTHLY })
  payType: PayType = PayType.MONTHLY;

  @IsBoolean()
  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty({ example: 1 })
  @IsNumber()
  departmentId: number;
}
