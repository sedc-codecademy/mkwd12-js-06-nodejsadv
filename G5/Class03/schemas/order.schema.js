import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  // items will be array of strings ["id"]
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product", // each id will REFERENCE to the product (each id will be a product)
    },
  ],
});

export const orderModelMongo = mongoose.model("Order", orderSchema, "orders");
