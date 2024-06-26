import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Movie {
  @Prop()
  name: string;

  @Prop()
  genre: string;

  @Prop()
  director: string;

  @Prop()
  imageUrl: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
