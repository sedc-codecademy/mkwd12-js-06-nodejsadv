import {
  IsString,
  IsBoolean,
  IsDecimal,
  IsOptional,
  Min,
  IsNumber,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class DepartmentUpdateDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'IT' })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: 'Information Technology Department',
    required: false,
  })
  description?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ example: true })
  isActive?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'New York' })
  officeLocation?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Transform(({ value }) => parseFloat(value))
  @ApiPropertyOptional({
    example: 100000,
    type: 'number',
    format: 'decimal',
  })
  budget?: number;
}
