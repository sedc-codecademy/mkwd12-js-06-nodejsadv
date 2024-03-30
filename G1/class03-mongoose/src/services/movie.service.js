import Movie from '../models/movie.model.js';

export class MovieService {
	static getAllMovies({ releaseYear, rating }) {
		// we can use the searchQuery object to build the query dynamically
		let searchQuery = {};

		// if we have a releaseYear, we add it to the searchQuery object and filter by it
		if (releaseYear) {
			searchQuery.releaseYear = Number(releaseYear);
		}

		// if we have a rating, we add it to the searchQuery object and filter by it
		if (rating) {
			searchQuery.rating = Number(rating);
		}

		// we return the result of the query, which will be an array of movies filtered by the searchQuery object
		return Movie.find(searchQuery);
	}

	static getMovieById(movieId) {
		// we find the movie by its id and return it
		return Movie.findById(movieId);
	}

	static createMovie(movieData) {
		// we create a new movie with the movieData object
		const movie = new Movie(movieData);

		// we save the movie in the database and return the result
		return movie.save();
	}

	static updateMovie(movieId, updateData) {
		// we find the movie by its id and update it with the updateData object
		// if we don't pass the { new: true } option, the method will return the movie before the update
		// if we pass the { new: true } option, the method will return the movie after the update
		// if the movie is not found, the method will return null and nothing will be updated
		return Movie.findByIdAndUpdate(movieId, updateData, { new: true });
	}

	static deleteMovie(movieId) {
		// we find the movie by its id and delete it
		// if the movie is not found, the method will return null and nothing will be deleted
		return Movie.findByIdAndDelete(movieId);
	}
}
