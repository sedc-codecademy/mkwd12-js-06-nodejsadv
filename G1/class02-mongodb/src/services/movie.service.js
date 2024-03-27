import { v4 as uuid } from 'uuid';
import { getDb } from '../database/mongo-connection.js';
import { ObjectId } from 'mongodb';

export class MovieService {
	static movies = [];

	static async getAllMovies({ releaseYear, rating }) {
		let searchQuery = {};

		if (releaseYear) {
			searchQuery.releaseYear = Number(releaseYear);
		}

		if (rating) {
			searchQuery.rating = Number(rating);
		}

		const movies = await getDb()
			.collection('movies')
			.find(searchQuery)
			.toArray();

		return movies;

		// if (!releaseYear) {
		// 	return movies;
		// }

		// return movies.filter(m => m.releaseYear === Number(releaseYear));
	}

	static getMovieById(movieId) {
		return getDb()
			.collection('movies')
			.findOne({ _id: new ObjectId(movieId) });
	}

	static createMovie(movieData) {
		return getDb().collection('movies').insertOne(movieData);
	}

	static updateMovie(movieId, updateData) {
		return getDb()
			.collection('movies')
			.updateOne(
				{ _id: new ObjectId(movieId) },
				{
					$set: updateData,
				}
			);
	}

	static deleteMovie(movieId) {
		return getDb()
			.collection('movies')
			.deleteOne({
				_id: new ObjectId(movieId),
			});
	}
}
