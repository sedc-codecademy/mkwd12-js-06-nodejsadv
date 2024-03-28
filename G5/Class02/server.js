import express from "express";
import { mongoConnection } from "./db/mongo-connection.js";
import productsRouter from "./routes/products.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is live");
});

app.use(productsRouter);

app.listen(3000, "localhost", async () => {
  console.log("Server is up and running");
  await mongoConnection();
});
