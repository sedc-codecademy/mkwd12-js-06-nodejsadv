import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Movie } from 'src/movies/mongo/movies.schema';

@Schema()
export class WatchLater {
  @Prop()
  title: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Movie.name }],
  })
  movies: Movie[];
}

export const WatchLaterSchema = SchemaFactory.createForClass(WatchLater);
