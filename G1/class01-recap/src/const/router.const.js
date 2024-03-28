import { Router } from "express";
import { movieRouter } from "../routes/movie.router.js";

export const globalRouter = Router();

globalRouter.use("/movies", movieRouter);
