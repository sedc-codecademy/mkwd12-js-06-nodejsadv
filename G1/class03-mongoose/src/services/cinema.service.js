import Cinema from '../models/cinema.model.js';

export class CinemaService {
	static getCinema(id) {
		// We use the findById method of the Cinema model to find a cinema by id
		// We use the populate method to populate the movies field of the cinema
		// The populate method is used to replace the specified path in the document with the document from another collection
		// In this case, we are replacing the movies field of the cinema with the movies documents from the movies collection
		// without populate we would only get the id of the movies e.g. movies: ['123', '456']
		// with populate we get the full movie documents e.g. movies: [{_id: '123', title: 'Movie 1'}, {_id: '456', title: 'Movie 2'}]
		return Cinema.findById(id).populate('movies');
	}

	static createCinema(cinemaData) {
		// We create a new instance of the Cinema model and pass the data to the constructor function of the model
		const cinema = new Cinema(cinemaData);

		// We save the document in the database, this step saves the document in the database and returns a promise
		return cinema.save();
	}

	static async toggleMovie(cinemaId, movieId) {
		// We get cinema by id
		const cinema = await Cinema.findById(cinemaId);

		// and if it doesn't exist
		if (!cinema) {
			// we throw an error
			throw new Error('Cinema not found');
		}

		// We check if the movie exists in the cinema
		const movieIndex = cinema.movies.findIndex(
			movie => movie.toString() === movieId
		);

		// If it doesn't exist
		if (movieIndex === -1) {
			// we add it
			cinema.movies.push(movieId);
		} else {
			// if it exists we remove it
			cinema.movies.splice(movieIndex, 1);
		}

		// We save the document in the database, this step saves the document in the database and returns a promise
		return cinema.save();
	}
}
