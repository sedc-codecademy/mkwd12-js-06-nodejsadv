import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  // items will be array of strings ["id"]
  items: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

export const orderModelMongo = mongoose.model("Order", orderSchema, "orders");
