import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class ClubUpdateDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  stadium?: string;

  @IsString()
  @IsOptional()
  league?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  wins?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  losses?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  draws?: number;

  @IsDateString()
  @IsOptional()
  foundedAt?: string;
}
