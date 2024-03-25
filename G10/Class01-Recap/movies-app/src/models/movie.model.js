import DataService from "../services/data.service.js";
import { createPath } from "../utils/utils.js";
import Movie from "../entities/movie.entity.js";

const moviesPath = createPath(["..", "..", "db", "movies.json"]);
console.log("MOVIES PATH", moviesPath);

export default class MovieModel {
  static async getAll() {
    return await DataService.readData(moviesPath);
  }

  static async getById(id) {
    const movies = await DataService.readData(moviesPath);
    // const movies = this.getAll();
    const foundMovie = movies.find((movie) => movie.id === id);
    if (!foundMovie) {
      throw new Error("Movie not found");
    }
    return foundMovie;
  }

  static async create(body) {
    const movies = await this.getAll();
    const { name, genre, director, year, description, rating } = body;
    // const name = body.name;
    // const genre = body.genre ....
    const movie = new Movie(name, genre, director, year, description, rating);
    movies.push(movie);
    await DataService.writeData(moviesPath, movies);
    return movie;
  }

  static async update(id, body) {
    const movies = await this.getAll();
    const index = movies.findIndex((movie) => movie.id === id);
    if (index < 0) {
      throw new Error("Movie not found");
    }
    const updatedMovie = {
      ...movies[index],
      ...body,
      id,
    };
    movies[index] = updatedMovie;
    await DataService.writeData(moviesPath, movies);
    return movies[index];
  }

  static async delete(id) {
    const movies = await this.getAll();
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    if (movies.length === filteredMovies.length) {
      throw new Error("Movie to delete not found");
    }
    await DataService.writeData(moviesPath, filteredMovies);
  }
}
