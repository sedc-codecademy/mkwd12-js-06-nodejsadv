import { Router } from "express";
import { StudentController } from "../controllers/student.controller.js";

//The url here that will match the below routes will be localhost:4000/api/students

export const studentRouter = Router();

studentRouter.get("/", StudentController.getAllStudents);
studentRouter.get("/:id", StudentController.getStudentById);
studentRouter.post("/", StudentController.createStudent);
studentRouter.put("/:id", StudentController.updateStudent);
studentRouter.delete("/:id", StudentController.deleteStudent);
studentRouter.delete("/", StudentController.deleteAllStudents);
