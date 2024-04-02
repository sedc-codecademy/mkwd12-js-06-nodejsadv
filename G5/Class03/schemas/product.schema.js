import mongoose from "mongoose";

const { Schema } = mongoose;

/**
 * This schema means that each product object (file) that we want to save
 * into mongo, must RESPECT this schema. Otherwise mongo will return error
 */
const productSchema = new Schema({
  // the product object must have a property name, that will be
  // of primitive data type string
  name: {
    type: String,
    required: true,
  },

  // the product object must have a property description, that will be
  // of primitive data type string
  description: {
    type: String,
    required: true,
  },

  // the product object must have a property price, that will be
  // of primitive data type number
  price: {
    type: Number,
    required: true, // we must have this property
  },
});

// We gonna use it to INTERACT WITH MONGO ATLAS
export const productMongoModel = mongoose.model(
  "Product", // name
  productSchema, //schema
  "products" // collection (for the records to be saved)
);
