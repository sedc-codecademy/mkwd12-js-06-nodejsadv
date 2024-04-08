import { Controller, Get } from '@nestjs/common';

@Controller('movies') // route
export class MovieController {
  @Get()
  getMovies() {
    console.log('get movies');
    return ['Titanic'];
  }
}
