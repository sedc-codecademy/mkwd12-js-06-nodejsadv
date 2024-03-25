import Joi from "joi";

//Create a validation schema for movie with joi
const movieSchema = Joi.object({
  name: Joi.string().required(),
  genre: Joi.array().min(1).items(Joi.string()).required(),
  director: Joi.string().required(),
  year: Joi.number().required(),
  description: Joi.string().min(30).required(),
  rating: Joi.number().required(),
});

//Create the movie validator middleware
const movieValidator = (req, res, next) => {
  const movieData = req.body;
  //Validating the user data
  const validation = movieSchema.validate(movieData);

  //Checking if there is a validation error
  if (validation.error) {
    res.status(400).send({
      message: validation.error.details[0].message,
    });
  } else {
    next();
  }
};

export default movieValidator;
