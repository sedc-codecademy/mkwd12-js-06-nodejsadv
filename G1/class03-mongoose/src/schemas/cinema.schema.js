import joi from 'joi';

export const cinemaSchema = joi.object({
	name: joi.string().min(3).max(30).required(),
	location: joi.string().min(3).max(50).required(),
	capacity: joi.number().integer().min(1).required(),
});
