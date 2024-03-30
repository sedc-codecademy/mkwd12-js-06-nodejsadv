import MovieService from "../services/movie.service.js";

export default class MovieController {
  static async getMovies(req, res) {
    try {
      const movies = await MovieService.getAll();
      res.send(movies);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getMovie(req, res) {
    try {
      const movieId = req.params.id;
      const movie = await MovieService.getById(movieId);
      res.send(movie);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async createMovie(req, res) {
    try {
      const movieBody = req.body;
      const movie = await MovieService.create(movieBody);
      res.status(201).send(movie);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateMovie(req, res) {
    try {
      const movieId = req.params.id;
      const movieBody = req.body;
      const movie = await MovieService.update(movieId, movieBody);
      res.send(movie);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteMovie(req, res) {
    try {
      const movieId = req.params.id;
      await MovieService.delete(movieId);
      res.status(200).send({ message: "Movie deleted successfully" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
