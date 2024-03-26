import { Router } from "express";
import { notesRequestValidator } from "../services/notes.request-validator.js";
import { NotesController } from "../controllers/notes.controller.js";

const notesRouter = Router();

const notesController = new NotesController();
// CREATE NOTE

// localhost:3000/notes
notesRouter.post("", notesRequestValidator, async (req, res) => {
  // Contoller here :)
  await notesController.createNote(req, res);
});

// GET ALL NOTES

/**
 * Implement GET all notes
 * when this route is hit, return all notes from our db
 */

/**
 * 1. Treba da gi iscitam site notes od notes.db.json
 *    - mi treba fs operacija (readFile) (veke ja imame taa fs. funkcija
 * )
 *  1.5. Koristime MVC arhitektura, ke pocnam od modelot bidejki toj ni e heavy lifter (Coleman)
 * 2. Istite tie notes treba da gi vratam kon korisnikot
 *  2.5 Stom od modelot ke gi vratam, ke gi iscitam vo kontrolerot i ke gi vratam na korisnikot
 * 3. Gi vrakame koristejki go res objektot
 */

// "" => localhost:3000
// ako imame /notes vo serverjs togas ke bide
// localhost:3000/notes
notesRouter.get("", async (req, res) => {
  await notesController.readNotes(req, res);
});

/**
 * 1. Treba da iscitam note po daden id
 *    - Ke kreirame metoda vo notes modelot ke se vika: getByID => DONE
 *    - Ovaa metoda ke dobiva eden parameter (id) koisto e vsusnost ID-to na note-ot shto go barame => DONE
 *    - Veke imame metoda readnotes kojasto gi vraka site notes, ke ja iskorisime .find za da go najdime
 *      toj note. => DONE
 *    - Ako toj note nepostoi ke vratime error => DONE
 *    - Ako postoi go vrakame note-ot do kontrolerot :) => DONE
 * 2. Iscitaniot note treba da go vratime kon korisnikot
 *    - Ke kreirame metoda getNoteById kojashto dobiva req i res kako parametri => DONE
 *    - ID-to za note-ot shto go barame ke bide preprateno kako request.param => DONE
 *    - Vo ovaa metoda ke ja povikuvame soodvetnata metoda od  modelot (getByID) => DONE
 *    - Vo try catch block ke ja povikame soodvetnata metoda od modelot => DONE
 *      i ako vrati rezultat so response go vrakame rezultatot => DONE
 *      ako ima error, vo catch-ot go handlame => DONE
 *    - Treba samata metoda od controller-ot da ja povikame vo rutata
 */
// GET  NOTE BY ID /:id
// localhost:3000/notes/:id
notesRouter.get("/:id", async (req, res) => {
  await notesController.getNoteById(req, res);
});

export default notesRouter;
