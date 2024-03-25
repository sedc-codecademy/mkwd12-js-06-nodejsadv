import { v4 as uuid } from "uuid";

export class MovieService {
  static movies = [];

  static async getAllMovies() {
    return this.movies;
  }

  static async getMovieById(movieId) {
    const foundMovie = this.movies.find(movie => movie.id === movieId);

    if (!foundMovie) throw new Error("Movie not found!");

    return foundMovie;
  }

  static async createMovie(movieData) {
    const newMovie = { id: uuid(), ...movieData };

    // this.movies = [...this.movies, newMovie]
    this.movies.push(newMovie);

    return newMovie;
  }

  static async updateMovie(movieId, updateData) {
    // this.movies = this.movies.map(movie =>
    //   movie.id === movieId ? { ...movie, ...updateData } : movie
    // );

    this.movies = this.movies.map(movie => {
      if (movie.id === movieId) {
        //Update the found movie with updated data
        return { ...movie, ...updateData };
      } else {
        return movie;
      }
    });
  }

  static async deleteMovie(movieId) {
    const updatedMovies = this.movies.filter(movie => movie.id !== movieId);

    if (this.movies.length === updatedMovies.length)
      throw new Error("Can't delete movie! Movie not found!");

    this.movies = updatedMovies;
  }
}
