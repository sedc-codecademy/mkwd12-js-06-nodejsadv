import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller.js";

const ordersRouter = Router();

const orderController = new OrdersController();

/**
 * Requirement: Create 2 routes
 * 1. Create new order
 * 2. Read all orders
 */
// CREATE NEW ORDER
ordersRouter.post("/orders", async (req, res) => {
  await orderController.addOrder(req, res);
});

// GET ALL ORDERS
ordersRouter.get("/orders", async (req, res) => {
  await orderController.listOrders(req, res);
});

export default ordersRouter;
