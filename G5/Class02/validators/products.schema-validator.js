import joi from "joi";

const productsValidationSchema = joi.object({
  // if typeof name === "string" && name.length >= 3 && name !== undefined
  name: joi.string().min(3).required(),
  // if typeof price === "number" && name >= 1 && name !== undefined
  price: joi.number().min(1).required(),
  // if typeof origin === "string" && origin.length >= 3 && origin !== undefined
  origin: joi.string().min(3).required(),
});

export default productsValidationSchema;
