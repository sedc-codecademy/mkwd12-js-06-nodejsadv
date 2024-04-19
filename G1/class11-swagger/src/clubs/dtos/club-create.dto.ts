import { Transform } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class ClubCreateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsString()
  @IsNotEmpty()
  // @MaxLength(30)
  location: string;

  @IsString()
  @IsNotEmpty()
  stadium: string;

  @IsString()
  @IsNotEmpty()
  league: string;

  @IsInt()
  @Min(0)
  wins: number = 0;

  @IsInt()
  @Min(0)
  losses: number = 0;

  @IsInt()
  @Min(0)
  draws: number = 0;

  @IsDateString()
  foundedAt: string;
}
