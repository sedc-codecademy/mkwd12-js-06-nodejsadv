import { Schema, model } from 'mongoose';
import { genres } from '../schemas/movie.schema.js';

const actorSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 30,
	},
	age: {
		type: Number,
		min: 1,
		required: true,
	},
});

const movieSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required'],
			minlength: 3,
			maxlength: 30,
		},
		director: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 30,
		},
		releaseYear: {
			type: Number,
			required: true,
			min: 1900,
			max: 2024,
		},
		rating: {
			type: Number,
			min: 1,
			max: 10,
		},
		language: {
			type: String,
			minlength: 3,
			maxlength: 30,
		},
		genre: {
			type: String,
			required: true,
			enum: genres,
		},
		actors: [
			{
				type: actorSchema,
				required: [true, 'Actors are required. Add at least one actor.'],
			},
		],
	},
	{
		timestamps: true,
	}
);

// can be used a singular term "movie" even thou it's named "movies" in mongo db, as it automatically searches for lowercase plural
const Movie = model('movie', movieSchema);

export default Movie;
