import { movieSchema } from '../schemas/movie.schema.js';
import { MovieService } from '../services/movie.service.js';

export class MovieController {
	static async getAllMovies(req, res) {
		try {
			const movies = await MovieService.getAllMovies(req.query);

			res.status(200).json(movies);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	}

	static async getMovieById(req, res) {
		try {
			const foundMovie = await MovieService.getMovieById(req.params.id);

			res.json(foundMovie);
		} catch (error) {
			res.status(404).json({ msg: error.message });
		}
	}

	static async createMovie(req, res) {
		try {
			const movieData = req.body;
			//Validate req.body
			await movieSchema.validateAsync(movieData, {
				//Use this if you want a full report with all the validation errors in the object
				abortEarly: false,
			});

			//Create movie in service
			const newMovie = await MovieService.createMovie(movieData);

			//Return new movie
			res.status(201).json(newMovie);
		} catch (error) {
			res.status(400).json({ msg: error.message });
		}
	}

	static async updateMovie(req, res) {
		try {
			const updateData = req.body;

			await movieSchema.validateAsync(updateData, {
				abortEarly: false,
			});

			const response = await MovieService.updateMovie(
				req.params.id,
				updateData
			);

			console.log(response);

			res.sendStatus(204);
		} catch (error) {
			res.status(400).json({ msg: error.message });
		}
	}

	static async deleteMovie(req, res) {
		try {
			await MovieService.deleteMovie(req.params.id);

			res.sendStatus(204);
		} catch (error) {
			res.status(404).json({ msg: error.message });
		}
	}
}
