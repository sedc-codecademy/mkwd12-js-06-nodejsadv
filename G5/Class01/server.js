import express from "express";
import notesRouter from "./routes/notes.routes.js";

const app = express();

app.use(express.json());
app.use("/notes", notesRouter);

app.listen(3000, "localhost", () => {
  console.log("Server is up and running");
});
