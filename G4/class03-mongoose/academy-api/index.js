import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { globalRouter } from "./src/const/router.const.js";

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

console.log(MONGO_URI);

const app = express();

app.use(express.json());

app.use("/api", globalRouter);

app.listen(process.env.PORT, process.env.HOST, async () => {
  try {
    //Connecting with the database using mongoose connect method
    await mongoose.connect(MONGO_URI);

    console.log("Connected to MongoDB");

    console.log(`Server is up at port: ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
