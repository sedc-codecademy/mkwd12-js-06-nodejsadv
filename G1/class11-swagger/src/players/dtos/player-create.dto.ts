import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Position } from '../../common/enums/position.enum';
import { Transform, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PlayerCreateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: 'The name of the player',
    example: 'Lionel Messi',
  })
  name: string;

  @IsInt()
  @Min(13)
  @ApiProperty({
    type: Number,
    description: 'The age of the player',
    example: 30,
    minimum: 13,
  })
  age: number;

  @IsEnum(Position)
  @ApiProperty({
    enum: Position,
    description: 'The position of the player',
    example: Position.MD,
    required: true,
  })
  position: Position;

  @IsNumber()
  @IsOptional()
  @Min(5)
  @ApiPropertyOptional({
    type: Number,
    minimum: 5,
    description: 'Size of the shoes the player wears',
    example: 10,
  })
  shoeSize?: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  @ApiProperty({
    type: String,
    description: 'The country he is from',
    example: 'Macedonia',
  })
  country: string;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    minimum: 0,
    description: 'The goals he has scored',
    example: 1,
    default: 0,
  })
  goals: number = 0;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    minimum: 0,
    description: 'The assists he has given',
    example: 1,
    default: 0,
  })
  assists: number = 0;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    minimum: 0,
    description: 'The saves he has saved',
    example: 1,
    default: 0,
  })
  saves: number = 0;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    minimum: 0,
    description: 'The matches he has played',
    example: 1,
    default: 0,
  })
  matchesPlayed: number = 0;

  @IsOptional()
  @IsUUID()
  @ApiPropertyOptional({
    type: String,
    description: 'The ID of the club he is playing at, at the moment',
    example: '22964c0d-6a0a-4ca8-a52d-e9d68662e908',
  })
  clubId?: string;
}
