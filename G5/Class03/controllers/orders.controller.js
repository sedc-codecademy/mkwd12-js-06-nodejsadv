import { OrderModel } from "../models/orders.model.js";

export class OrdersController {
  constructor() {
    this.orderModel = new OrderModel();
  }

  async addOrder(req, res) {
    const { items } = req.body;

    try {
      const id = await this.orderModel.createOrder(items);
      res.status(201).send({ message: "Order is success created", id: id });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async listOrders(req, res) {
    const orders = await this.orderModel.readOrders();

    res.send(orders);
  }
}
