import { CreateMovieDTO } from '../dto/movie.dto';
import {
  IMovie,
  MovieCreationProps,
  RawMovieDocument,
} from '../types/movie.types';

export class MovieMapper {
  static toMovieCreationProps(movieDTO: CreateMovieDTO): MovieCreationProps {
    return {
      name: movieDTO.name,
      director: movieDTO.director,
      imageUrl: movieDTO.imageUrl,
      genre: movieDTO.genre,
    };
  }

  static toIMovie(rawMovieDocument: RawMovieDocument[]): IMovie[] {
    return rawMovieDocument.map((rawMovie) => ({
      id: rawMovie.id,
      name: rawMovie.name,
      imageUrl: rawMovie.imageUrl,
      director: rawMovie.director,
      genre: rawMovie.genre,
    }));
  }
}
