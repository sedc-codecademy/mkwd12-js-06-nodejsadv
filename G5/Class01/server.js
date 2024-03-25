import express from "express";
import notesRouter from "./routes/notes.routes.js";

const app = express();

app.use(notesRouter);

app.listen(3000, "localhost", () => {
  console.log("Server is up and running");
});
