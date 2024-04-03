import Joi from "joi";
import { STATUSES } from "../const/status.const.js";
import { ANIMAL_TYPES } from "../const/animal-type.const.js";

export const animalSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string()
    .valid(...ANIMAL_TYPES)
    .required(),
  breed: Joi.string().required(),
  age: Joi.number().min(0).required(),
  status: Joi.string()
    .valid(...STATUSES)
    .required(),
  description: Joi.string(),
});
