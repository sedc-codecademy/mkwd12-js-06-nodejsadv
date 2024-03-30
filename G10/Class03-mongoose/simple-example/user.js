import { Schema, model } from "mongoose";

// address sub-schema
const addressSchema = new Schema({
  street: String,
  city: String,
});

const userSchema = new Schema(
  {
    // name: String
    name: {
      type: String,
      minLength: 3,
      maxLength: 30,
      // required: true,
      required: [true, "name is required"],
    },
    age: {
      type: Number,
      min: 1,
      max: 100,
    },
    email: {
      type: String,
      lowercase: true,
      // uppercase: true
      required: [true, "email is required"],
    },
    password: {
      type: String,
      minLength: 5,
      maxLength: 18,
      required: [true, "password is required"],
    },
    //   address: {
    //     street: String,
    //     city: String
    //   }
    address: addressSchema,
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
  }
  // { timestamps: true } // if we set timestamps to true, the createdAt field will be automatically added
);

const User = model("user", userSchema, "users"); // users

export default User;
