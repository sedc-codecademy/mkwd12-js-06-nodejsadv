import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";

const router = Router();
router.get("", MovieController.getMovies);
router.get("/:id", MovieController.getMovie);
router.post("", MovieController.createMovie);
router.patch("/:id", MovieController.updateMovie);
router.delete("/:id", MovieController.deleteMovie);

export default router;
