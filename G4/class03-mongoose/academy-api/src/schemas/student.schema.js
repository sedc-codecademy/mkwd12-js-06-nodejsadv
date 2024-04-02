import joi from "joi";

export const studentSchema = joi.object({
  firstName: joi.string().min(2).required(),
  lastName: joi.string().min(2).required(),
  age: joi.number().min(20).max(120).required(),
  email: joi.string().email().required(),
});

export const updateStudentSchema = joi.object({
  firstName: joi.string().min(2),
  lastName: joi.string().min(2),
  age: joi.number().min(20).max(120),
  email: joi.string().email(),
});
