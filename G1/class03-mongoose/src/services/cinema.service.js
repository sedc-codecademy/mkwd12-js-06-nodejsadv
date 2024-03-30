import Cinema from '../models/cinema.model.js';

export class CinemaService {
	static getCinema(id) {
		return Cinema.findById(id).populate('movies');
	}

	static createCinema(cinemaData) {
		const cinema = new Cinema(cinemaData);

		return cinema.save();
	}

	static async toggleMovie(cinemaId, movieId) {
		const cinema = await Cinema.findById(cinemaId);

		if (!cinema) {
			throw new Error('Cinema not found');
		}

		console.log(cinema);

		const movieIndex = cinema.movies.findIndex(
			movie => movie.toString() === movieId
		);

		console.log(movieIndex);

		// If it doesn't exist
		if (movieIndex === -1) {
			cinema.movies.push(movieId);
		} else {
			// if it exists
			cinema.movies.splice(movieIndex, 1);
		}

		return cinema.save();
	}
}
