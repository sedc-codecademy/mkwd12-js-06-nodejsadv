import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  Min,
  Max,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PayType } from '../../common/pay-type.enum';
import { Transform, Type } from 'class-transformer';

export class EmployeeQueryDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'John' })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Software Developer' })
  jobTitle?: string;

  @IsOptional()
  @IsEnum(PayType)
  @ApiPropertyOptional({ example: PayType.MONTHLY })
  payType?: PayType;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    return value === 'true' ? true : value === 'false' ? false : value;
  })
  @ApiPropertyOptional({ example: true })
  isActive?: boolean;

  @IsOptional()
  @Min(0)
  @Transform(({ value }) => Number(value))
  @ApiPropertyOptional({ example: 1000 })
  minPayRate?: number;

  @IsOptional()
  @Max(100000)
  @Transform(({ value }) => Number(value))
  @ApiPropertyOptional({ example: 5000 })
  maxPayRate?: number;
}
