import joi from "joi";

export const courseSchema = joi.object({
  title: joi.string().min(3).required(),
  numberOfClasses: joi.number().min(3).required(),
  trainer: joi.string().min(3).required(),
  assisstant: joi.string().min(3).required(),
  students: joi.array().items(joi.string()),
});
