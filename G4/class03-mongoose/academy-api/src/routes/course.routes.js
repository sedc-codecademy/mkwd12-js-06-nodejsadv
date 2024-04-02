import { Router } from "express";
import { CourseController } from "../controllers/course.controller.js";

export const coursesRouter = Router();

coursesRouter.get("/", CourseController.getAllCourses);
coursesRouter.get("/:id", CourseController.getCourseById);
coursesRouter.post("/", CourseController.createCourse);
