import { Document, Types } from 'mongoose';
import { Movie } from '../mongo/movies.schema';

export interface MovieCreationProps {
  name: string;
  genre: string;
  director: string;
  imageUrl: string;
}

export type RawMovieDocument = Document<unknown, {}, Movie> &
  Movie & {
    _id: Types.ObjectId;
  };

export interface IMovie {
  id: string;
  name: string;
  genre: string;
  director: string;
  imageUrl: string;
}
