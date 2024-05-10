import { IsNotEmpty, IsString, Min } from 'class-validator';

export class WatchLaterDTO {
  @IsNotEmpty()
  @IsString()
  @Min(2)
  title: string;

  @IsString({ each: true })
  movies: string[];
}
