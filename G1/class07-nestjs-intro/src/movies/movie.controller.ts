import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies') // route
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovies(): any {
    return this.movieService.getMovies();
  }

  @Post()
  createMovie(@Body() body: any) {
    console.log('create movie', body);
    return this.movieService.createMovie(body);
  }

  @Put(':id')
  updateMovie(@Body() body: any, @Param('id') id: string) {
    return this.movieService.updateMovie(Number(id), body);
  }

  @Patch(':id/rating/:ratingCount')
  updateMovieRating(
    // { id, ratingCount }: { id: string; ratingCount: string }
    @Param() params: { id: string; ratingCount: string },
  ) {
    return this.movieService.updateMovieRating(
      Number(params.id),
      Number(params.ratingCount),
    );
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(Number(id));
  }
}
