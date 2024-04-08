import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';

// config object for the module
@Module({
  imports: [], // other modules
  controllers: [MovieController], // controllers
  providers: [], // services, custom decorators
})
export class MovieModule {}
