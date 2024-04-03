import Joi from "joi";

export const adoptionSchema = Joi.object({
  adopterName: Joi.string().required(),
  email: Joi.string().email().required(),
  animal: Joi.string().required(),
});
