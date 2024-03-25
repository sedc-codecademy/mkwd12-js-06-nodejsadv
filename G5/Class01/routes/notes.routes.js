import { Router } from "express";
import { notesRequestValidator } from "../services/notes.request-validator.js";
import { NotesController } from "../controllers/notes.controller.js";

const notesRouter = Router();

const notesController = new NotesController();
// CREATE NOTE
notesRouter.post("", notesRequestValidator, async (req, res) => {
  // Contoller here :)
  await notesController.createNote(req, res);
});

// GET ALL NOTES
notesRouter.get("", (req, res) => {});

// GET  NOTE BY ID /:id
notesRouter.get("/:id", (req, res) => {});

export default notesRouter;
