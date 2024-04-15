import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Position } from './../../common/enums/position.enum';
export class PlayerQueryDto {
  @IsEnum(Position)
  @IsOptional()
  position?: Position;

  @IsString()
  @IsOptional()
  country?: string;
}
