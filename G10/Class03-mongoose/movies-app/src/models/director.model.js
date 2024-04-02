import { Schema, model } from "mongoose";

export const directorSchema = {
  firstName: {
    type: String,
    minLegth: 3,
    maxLength: 30,
    required: [true, "firstName is required"],
  },
  lastName: {
    type: String,
    minLegth: 3,
    maxLength: 30,
    required: [true, "lastName is required"],
  },
  birthYear: {
    type: Number,
    required: [true, "birthYear is required"],
  },
};

// If I uncomment this line it will create a collection directors in the nodeJsAdvanced database
// export const Director = model("director". directorSchema);
