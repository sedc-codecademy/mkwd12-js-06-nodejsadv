import { Schema, model } from "mongoose";
import { genres } from "../util/constants.js";
import { directorSchema } from "./director.model.js";

const movieSchema = new Schema({
  name: {
    type: String,
    minLength: 5,
    maxLength: 50,
    required: [true, "name is required"],
  },
  genre: {
    type: [String],
    enum: genres,
    required: [true, "genre is required"],
  },
  director: {
    type: Schema.Types.ObjectId,
    ref: 'director'
  },
  year: {
    type: Number,
    required: [true, "year is required"],
  },
  description: {
    type: String,
    minLength: 20,
    maxLength: 300,
    required: [true, "description is required"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, "rating is required"],
  },
});

const Movie = model("movie", movieSchema);

export default Movie;
