import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

// config object for the module
@Module({
  imports: [], // other modules
  controllers: [MovieController], // controllers
  providers: [MovieService], // services, custom decorators
})
export class MovieModule {}
