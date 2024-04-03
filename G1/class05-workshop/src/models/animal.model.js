import { model, Schema } from "mongoose";
import { ANIMAL_TYPES } from "../const/animal-type.const.js";
import { STATUSES } from "../const/status.const.js";

const animalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ANIMAL_TYPES,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: STATUSES,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Animal = model("Animal", animalSchema);
