import {
  IsBooleanString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Position } from '../../common/enums/position.enum';
import { Transform, Type } from 'class-transformer';

export class PlayerCreateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsInt()
  @Min(13)
  age: number;

  @IsEnum(Position)
  position: Position;

  @IsNumber()
  @IsOptional()
  @Min(5)
  shoeSize?: number;

  @IsString()
  @Transform(({ value }) => value.toUpperCase())
  country: string;

  @IsInt()
  @Min(0)
  goals: number = 0;

  @IsInt()
  @Min(0)
  assists: number = 0;

  @IsInt()
  @Min(0)
  saves: number = 0;

  @IsInt()
  @Min(0)
  matchesPlayed: number = 0;
}

// id
// name
// age
// position
// country
// goals
// assists
// saves
// matchesPlayed
// createdAt
// updatedAt
