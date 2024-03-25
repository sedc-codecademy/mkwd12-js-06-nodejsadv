import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";
import canDeleteMovie from "../middleware/movie.middleware.js";
import movieValidator from "../middleware/movie.validator.js";

const router = Router();

router.get("", MovieController.getMovies);
router.get("/:id", MovieController.getMovie);
router.post("", movieValidator, MovieController.createMovie);
router.patch("/:id", MovieController.updateMovie);
router.delete("/:id", canDeleteMovie, MovieController.deleteMovie);

export default router;
