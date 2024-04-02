import { Router } from "express";
import { StudentController } from "../controllers/student.controller.js";

export const studentsRouter = Router();

studentsRouter.get("/", StudentController.getAllStudents);
studentsRouter.get("/:id", StudentController.getStudentById);
studentsRouter.post("/", StudentController.createStudent);
studentsRouter.patch("/:id", StudentController.updateStudent);
studentsRouter.delete("/:id", StudentController.deleteStudent);
