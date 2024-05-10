import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './mongo/movies.schema';
import { Model } from 'mongoose';
import {
  IMovie,
  MovieCreationProps,
  RawMovieDocument,
} from './types/movie.types';
import { MovieMapper } from './utils/movie.mapper';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}
  // create a movie
  async saveMovie(props: MovieCreationProps): Promise<string> {
    const movie = new this.movieModel(props); // Movie object

    await movie.save();

    return movie.id;
  }

  // list all movies
  async getMovies(): Promise<IMovie[]> {
    const rawMovies: RawMovieDocument[] = await this.movieModel.find().exec();

    const movies = MovieMapper.toIMovie(rawMovies);

    return movies;
  }
}
