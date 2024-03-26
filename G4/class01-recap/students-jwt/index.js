// This line must be first in your index.js if you want to use .env file variables
//Don't forget to create your own .env file with a variable called ACCESS_TOKEN_SECRET
import "dotenv/config";

import express from "express";
import cors from "cors";
import { globalRouter } from "./src/const/router.const.js";

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "0.0.0.0";

console.log(process.env.ACCESS_TOKEN_SECRET);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", globalRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is up at port: ${PORT}`);
});
