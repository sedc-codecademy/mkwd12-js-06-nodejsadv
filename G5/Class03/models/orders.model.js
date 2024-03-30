import { orderModelMongo } from "../schemas/order.schema.js";

export class OrderModel {
  async createOrder(itemsArray) {
    // orderData = ["someIds", "someId2"]
    const order = new orderModelMongo({ items: itemsArray });

    const reponse = await order.save();

    return reponse._id;
  }

  async readOrders() {
    // populate("items") will change the ids of items array with the objects coresponding to those ids
    const orders = await orderModelMongo.find().populate("items");

    return orders;
  }
}
