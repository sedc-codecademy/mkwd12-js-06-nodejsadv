import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import productsRouter from "./routes/products.routes.js";
import ordersRouter from "./routes/orders.routes.js";

const server = express();

server.use(express.json());

server.use(productsRouter);
server.use(ordersRouter);

server.listen(3000, "localhost", async () => {
  console.log("Server is up and running");
  // STEP #2: Invoke the function that we created
  // to connect with mongo atlas :)
  await mongo_connection();
});
