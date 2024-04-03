import { Router } from "express";
import { animalsRouter } from "../routes/animals.routes.js";
import { adoptionsRouter } from "../routes/adoptions.routes.js";

export const router = Router();

router.use("/animals", animalsRouter);
router.use("/adoptions", adoptionsRouter);
