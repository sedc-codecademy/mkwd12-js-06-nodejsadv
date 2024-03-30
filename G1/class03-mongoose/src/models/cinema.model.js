import { Schema, model } from 'mongoose';

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
				type: Schema.Types.ObjectId,
				ref: 'movie',
			},
		],
	},
	{
		timestamps: true,
	}
);

const Cinema = model('cinema', cinemaSchema);

export default Cinema;
