import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use("/api", router);

app.listen(PORT, HOST, () => {
  console.log(`Server is listenig on port ${PORT}`);
});
