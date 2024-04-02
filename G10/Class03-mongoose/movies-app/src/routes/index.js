import { Router } from "express";
import movieRoter from "./movie.routes.js";

const router = Router();

router.use("/movies", movieRoter);

export default router;
