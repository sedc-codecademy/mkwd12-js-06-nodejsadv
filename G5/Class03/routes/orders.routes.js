import { Router } from "express";
import { orderModelMongo } from "../schemas/order.schema.js";

const ordersRouter = Router();

/**
 * Requirement: Create 2 routes
 * 1. Create new order
 * 2. Read all orders
 */
// CREATE NEW ORDER
ordersRouter.post("/orders", async (req, res) => {});

// GET ALL ORDERS
ordersRouter.get("/orders", async (req, res) => {});

export default ordersRouter;
