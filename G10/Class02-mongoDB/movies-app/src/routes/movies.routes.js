import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";
import canDeleteMovie from "../middleware/movie.middleware.js";
import movieValidator from "../middleware/movie.validator.js";

const router = Router();

router.get("", MovieController.getMovies);
router.get("/:id", MovieController.getMovie);
router.post("", MovieController.createMovie);
router.patch("/:id", MovieController.updateMovie);
router.put("/:id", MovieController.replaceMovie);
router.delete("/:id", MovieController.deleteMovie);

export default router;
