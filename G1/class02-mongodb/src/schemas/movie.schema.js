import joi from "joi";

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Thriller",
  "Sci-Fi",
];

const actorSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  age: joi.number().integer().min(1).required(),
});

export const movieSchema = joi.object({
  title: joi.string().min(3).max(30).required(),
  director: joi.string().min(3).max(30).required(),
  releaseYear: joi.number().integer().min(1900).max(2024),
  rating: joi.number().min(1).max(10),
  language: joi.string().min(3).max(30),
  genre: joi
    .string()
    .valid(...genres)
    .required(),
  actors: joi.array().items(actorSchema).required(),
});
