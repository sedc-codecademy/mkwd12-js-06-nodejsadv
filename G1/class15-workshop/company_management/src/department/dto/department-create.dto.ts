import {
  IsString,
  IsBoolean,
  IsDecimal,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class DepartmentCreateDto {
  @IsString()
  @ApiProperty({ example: 'IT' })
  name: string;

  @IsString()
  @ApiProperty({ example: 'Information Technology Department' })
  description: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  isActive: boolean;

  @IsString()
  @ApiProperty({ example: 'New York' })
  officeLocation: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty({ example: 100000, type: 'number', format: 'decimal' })
  budget: number;
}
