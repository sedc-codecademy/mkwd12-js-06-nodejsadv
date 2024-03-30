import { CinemaService } from '../services/cinema.service.js';
import { cinemaSchema } from '../schemas/cinema.schema.js';

export class CinemaController {
	static async getCinema(req, res) {
		try {
			const cinema = await CinemaService.getCinema(req.params.id);

			res.json(cinema);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	}
	static async createCinema(req, res) {
		try {
			await cinemaSchema.validateAsync(req.body, {
				abortEarly: false,
			});

			const cinema = await CinemaService.createCinema(req.body);

			res.json(cinema);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	}

	static async toggleMovie(req, res) {
		try {
			const cinemaId = req.params.cinemaId;
			const movieId = req.params.movieId;

			const updatedCinema = await CinemaService.toggleMovie(cinemaId, movieId);

			res.json(updatedCinema);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	}
}
