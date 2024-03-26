import { v4 as uuid } from "uuid";
import { NoteEntity } from "../entities/notes.entity.js";
import { addNote, readNotes } from "../services/notes.service.js";
export class NotesModel {
  /**
   *
   * notesBody to have:
   * {title: string; description: string;}
   */

  async createNote(notesBody) {
    const id = uuid();
    const note = new NoteEntity(id, notesBody.title, notesBody.description);

    try {
      await addNote(note);
      return id;
    } catch (error) {
      throw new Error("Cannot create note");
    }
  }

  async readNotes() {
    try {
      const notes = await readNotes();
      return notes;
    } catch (error) {
      throw new Error("Cannot read note");
    }
  }

  async getByID(id) {
    const notes = await readNotes();

    const note = notes.find((note) => note.id === id);

    if (!note) {
      throw new Error("Not found");
    }

    return note;
  }
}
