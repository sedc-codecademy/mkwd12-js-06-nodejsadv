import { Router } from "express";
import { studentsRouter } from "../routes/student.routes.js";
import { coursesRouter } from "../routes/course.routes.js";

export const globalRouter = Router();

globalRouter.use("/students", studentsRouter);
globalRouter.use("/courses", coursesRouter);
