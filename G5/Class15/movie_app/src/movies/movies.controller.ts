import { Body, Controller, Post, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/movie.dto';
import { MovieMapper } from './utils/movie.mapper';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Post()
  async createMovie(@Body() movieDTO: CreateMovieDTO) {
    const movieCreationProps = MovieMapper.toMovieCreationProps(movieDTO);
    const id = await this.movieService.saveMovie(movieCreationProps);

    return {
      message: 'Movie is created',
      id,
    };
  }

  @Get()
  async listMovies() {
    const movies = await this.movieService.getMovies();

    return movies;
  }
}
