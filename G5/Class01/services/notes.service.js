import { readFile, writeFile } from "./fs.service.js";

export const readNotes = async () => {
  const notes = await readFile("./db/notes.db.json");

  return notes;
};

export const addNote = async (note) => {
  const notes = await readNotes();
  notes.push(note);
  await writeFile("./db/notes.db.json", notes);
};

export const deleteNote = async (noteId) => {
  const notes = await readNotes();
  const filteredNotes = notes.filter((note) => note.id !== noteId);

  await writeFile("./db/son", filteredNotes);
};

export const editNote = async (noteId, title, description) => {
  const notes = await readNotes();
  const editedNotes = notes.map((note) => {
    if (note.id === noteId) {
      return {
        ...note,
        title: title || note.title,
        description: description || note.description,
      };
    }

    return ticket;
  });

  await writeFile("./db/notes.db.json", editedNotes);
};
