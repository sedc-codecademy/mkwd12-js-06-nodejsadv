import {getDb} from '../database/mongo-connection.js';
import {ObjectId} from 'mongodb';

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
		return getDb()
				.collection('movies')
				.find(searchQuery)
				.toArray();

		// We avoid this code (below) because it's not efficient. Database should do the filtering, not the application (server).
		// if (!releaseYear) {
		// 	return movies;
		// }

		// return movies.filter(m => m.releaseYear === Number(releaseYear));
	}

	static getMovieById(movieId) {
		// we return the result of the query, which will be the movie with the specified id
		// movieId is a string, so we need to convert it to an ObjectId
		// we use the ObjectId class from the mongodb package to create an ObjectId from the movieId string
		// findOne will return the first movie that matches the query, or null if there are no matches
		return getDb()
			.collection('movies')
			.findOne({ _id: new ObjectId(movieId) });
	}

	static createMovie(movieData) {
		// insertOne will insert the movieData object into the movies collection
		return getDb().collection('movies').insertOne(movieData);
	}

	static updateMovie(movieId, updateData) {
		// updateOne will update the movie with the specified id with the updateData object
		// $set is a mongodb operator that sets the fields in the updateData object
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
		// deleteOne will delete the movie with the specified id
		return getDb()
			.collection('movies')
			.deleteOne({
				_id: new ObjectId(movieId),
			});
	}
}
