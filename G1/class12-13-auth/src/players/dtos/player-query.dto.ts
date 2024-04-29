import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { Position } from './../../common/enums/position.enum';
import { Type } from 'class-transformer';

export class PlayerQueryDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(Position)
  @IsOptional()
  position?: Position;

  @IsString()
  @IsOptional()
  country?: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  maxAge?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  minAge?: number;
}
