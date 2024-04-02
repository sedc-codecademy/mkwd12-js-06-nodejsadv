import { Schema, model } from "mongoose";
import validator from "validator";

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minLength: 2,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minLength: 2,
    },
    age: {
      type: Number,
      required: true,
      min: 20,
      max: 120,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        // validator property takes the value of the field as an argument and returns true or false
        validator: value => validator.isEmail(value),
        // If validator fails then we get the error in the message property which is used to return an error to the user
        message: error => `${error.value} is not a valid email`,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Student = model("Student", studentSchema);
