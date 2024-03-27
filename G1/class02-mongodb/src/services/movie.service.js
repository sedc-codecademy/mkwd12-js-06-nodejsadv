import { v4 as uuid } from 'uuid';
import { getDb } from '../database/mongo-connection.js';
import { ObjectId } from 'mongodb';

export class MovieService {
	static movies = [];

	static getAllMovies() {
		return getDb().collection('movies').find({}).toArray();
	}

	static getMovieById(movieId) {
		return getDb()
			.collection('movies')
			.findOne({ _id: new ObjectId(movieId) });
	}

	static createMovie(movieData) {
		return getDb().collection('movies').insertOne(movieData);
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
