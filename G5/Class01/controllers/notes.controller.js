import { NotesModel } from "../models/notes.model.js";
import { mapNotesRequestBody } from "../services/notes.mapper.js";

export class NotesController {
  constructor() {
    this.notesModel = new NotesModel();
  }

  async createNote(req, res) {
    /**
     * 1. Premap the request body.
     *
     * req.body
     * {
     *  rawTitle: string
     *  rawDescription: string
     * }  => we map them into =>
     * {
     * title: string
     * description: string
     * }
     *
     */

    const notesBody = mapNotesRequestBody(req.body);

    try {
      const id = await this.notesModel.createNote(notesBody);
      res.status(201).send({ id: id });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async readNotes(req, res) {
    try {
      const notes = await this.notesModel.readNotes();
      res.send(notes);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getNoteById(req, res) {
    const { id } = req.params; // {id: value}

    try {
      const note = await this.notesModel.getByID(id);
      res.send(note);
    } catch (error) {
      // veke ovde go "pricekuvame" error-ot
      res.status(404).send({ message: error.message });
    }
  }
}
