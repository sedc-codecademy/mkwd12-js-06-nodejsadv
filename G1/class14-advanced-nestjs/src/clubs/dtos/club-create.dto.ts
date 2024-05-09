import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
} from "class-validator";

export class ClubCreateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    example: 'Vardar',
    description: 'Name of the club',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30) // This is the maximum length of the column in the database. It's being validated by class-validator.
  @ApiProperty({
    type: String,
    maxLength: 30,
    example: 'Skopje, Macedonia',
    description: 'Location of the club',
  })
  location: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Gradski Stadion',
    description: 'Name of the stadium',
  })
  stadium: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'Bundes League',
    description: 'Name of the league',
  })
  league: string;

  @IsInt()
  @Min(0)
  @ApiProperty({
    type: Number,
    example: 0,
    default: 0,
    description: 'Number of wins',
  })
  wins: number = 0;

  @IsInt()
  @Min(0)
  @ApiProperty({
    type: Number,
    example: 0,
    default: 0,
    description: 'Number of losses',
  })
  losses: number = 0;

  @IsInt()
  @Min(0)
  @ApiProperty({
    type: Number,
    example: 0,
    default: 0,
    description: 'Number of draws',
  })
  draws: number = 0;

  @IsDateString()
  @ApiProperty({
    type: String,
    example: '2020-01-01',
    description: 'Date of foundation',
  })
  foundedAt: string;
}
