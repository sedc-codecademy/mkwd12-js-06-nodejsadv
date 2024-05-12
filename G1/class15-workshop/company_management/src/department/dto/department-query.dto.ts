import { IsString, IsOptional, IsBoolean, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class DepartmentQueryDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'IT' })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'New York' })
  officeLocation?: string;

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
  @ApiPropertyOptional({ example: 100000 })
  minBudget?: number;
}
