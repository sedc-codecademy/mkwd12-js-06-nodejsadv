import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./src/const/router.const.js";
import { connect } from "mongoose";
import { DB_URI } from "./src/const/db.const.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

(async () => {
  try {
    await connect(DB_URI);
    app.listen(process.env.PORT, process.env.HOSTNAME, (error) => {
      if (error) {
        console.error("Failed to start server", { error });
        return;
      }

      console.log(
        `Server is running on: http://${process.env.HOSTNAME}:${process.env.PORT}`,
      );
    });
  } catch (error) {
    console.error("Failed to connect to database", { error });
  }
})();
