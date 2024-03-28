import { Router } from "express";
import { MovieController } from "../controllers/movie.controller.js";

export const movieRouter = Router();

movieRouter.get("/", MovieController.getAllMovies);
movieRouter.get("/:id", MovieController.getMovieById);
movieRouter.post("/", MovieController.createMovie);
movieRouter.put("/:id", MovieController.updateMovie);
movieRouter.delete("/:id", MovieController.deleteMovie);
