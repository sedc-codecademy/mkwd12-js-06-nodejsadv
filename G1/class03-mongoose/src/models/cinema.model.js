import { Schema, model } from 'mongoose';

// Define the cinema schema for the database (This is the structure of the document)
// Validation in Mongoose is done by defining the type of the field and validation rules e.g. required, minlength, maxlength, min, max, etc.
const cinemaSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 30,
		},
		location: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 50,
		},
		capacity: {
			type: Number,
			required: true,
			min: 1,
		},
		movies: [
			{
				type: Schema.Types.ObjectId, // This means that the movies field will be an array of ObjectIds
				ref: 'movie', // This is the model that the ObjectId will reference to (in this case, the movie model - collection)
			},
		],
	},
	{
		timestamps: true, // This will add the createdAt and updatedAt fields to the document
	}
);

// Create the Cinema model from the schema and export it
const Cinema = model('cinema', cinemaSchema);

export default Cinema;
