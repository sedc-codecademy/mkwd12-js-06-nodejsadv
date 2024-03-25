import { Router } from "express";
import movieRouter from "./movies.routes.js";
import authRouter from "./auth.routes.js";
import { checkTokenValidity } from "../middleware/auth.middleware.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/movies", checkTokenValidity, movieRouter);

export default router;
