import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  genre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  director: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  imageUrl: string;
}
