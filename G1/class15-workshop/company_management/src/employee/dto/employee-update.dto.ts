import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsDate,
  IsDecimal,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PayType } from '../../common/pay-type.enum';
import { Transform } from 'class-transformer';

export class EmployeeUpdateDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'John Doe' })
  name?: string;

  @IsOptional()
  @IsEmail()
  @ApiPropertyOptional({ example: 'john.doe@example.com' })
  email?: string;

  @IsOptional()
  @IsPhoneNumber()
  @ApiPropertyOptional({ example: '+40712345678' })
  phone?: string;

  @IsOptional()
  @IsDate()
  @ApiPropertyOptional({
    example: '2024-05-07T08:10:25.116Z',
    type: 'string',
    format: 'date-time',
  })
  hireDate?: Date;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Software Developer' })
  jobTitle?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Transform(({ value }) => parseFloat(value))
  @ApiPropertyOptional({
    example: 1000,
    type: 'number',
    format: 'float',
  })
  payRate?: number;

  @IsOptional()
  @IsEnum(PayType)
  @ApiPropertyOptional({ example: PayType.MONTHLY })
  payType?: PayType;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ example: true, required: false })
  isActive?: boolean;

  @IsOptional()
  @ApiPropertyOptional({ example: 1, required: false })
  departmentId?: number;
}
