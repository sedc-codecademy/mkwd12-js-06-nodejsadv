import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './mongo/movies.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Movie.name, schema: MovieSchema, collection: 'movies' },
    ]),
  ],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
