import { Router } from "express";
import { authRouter } from "../routes/auth.routes.js";
import { studentRouter } from "../routes/student.routes.js";
import { tokenValidator } from "../middlewares/token-validator.middleware.js";

export const globalRouter = Router();

globalRouter.use("/", authRouter);
globalRouter.use("/students", tokenValidator, studentRouter);
