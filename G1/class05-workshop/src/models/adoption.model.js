import { model, Schema } from "mongoose";

const adoptionSchema = new Schema(
  {
    adopterName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    animal: {
      type: Schema.Types.ObjectId,
      ref: "Animal",
      required: true,
    },
    adoptionDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export const Adoption = model("Adoption", adoptionSchema);
