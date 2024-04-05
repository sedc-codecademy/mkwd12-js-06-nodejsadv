import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import router from "./routes/index.js";
import { connect } from "mongoose";
import { MONGO_URI } from "./database/mongo.const.js";

const PORT = process.env.PORT; // 4000 - imported from .env

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api", router);

async function startServer() {
  try {
    await connect(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error while connecting to MongoDB", error);
  }
}

startServer();
