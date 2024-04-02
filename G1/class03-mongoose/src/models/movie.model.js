import { Schema, model } from 'mongoose';
import { genres } from '../schemas/movie.schema.js';

// actorSchema is a subdocument schema, which can be used to define the structure of subdocuments in the main document
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

// movieSchema is the main document schema, which can be used to define the structure of the main document
const movieSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required'],
			minlength: 3,
			maxlength: 30,
			unique: [true, 'Movie with such title already exists'], // this will ensure that the title is unique, and will throw an error if it's not. e.g. when you already have the name "Saw" in the database, you can't add another movie with the same name
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
				type: actorSchema, // actorSchema is a subdocument schema, here we DON'T reference it as it's not a separate collection
				required: [true, 'Actors are required. Add at least one actor.'],
			},
		],
	},
	{
		timestamps: true, // adds createdAt and updatedAt fields
	}
);

// can be used a singular term "movie" even though it's named "movies" in mongo db, as it automatically searches for lowercase plural
const Movie = model('movie', movieSchema);

export default Movie;
