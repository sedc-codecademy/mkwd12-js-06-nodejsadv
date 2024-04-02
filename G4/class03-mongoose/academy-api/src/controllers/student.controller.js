import {
  studentSchema,
  updateStudentSchema,
} from "../schemas/student.schema.js";
import { StudentService } from "../services/student.service.js";

export class StudentController {
  //1. Get all students
  static async getAllStudents(req, res) {
    try {
      const students = await StudentService.getAllStudents();

      res.json(students);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
  }
  //2. Get student by id
  static async getStudentById(req, res) {
    try {
      const foundStudent = await StudentService.getStudentById(req.params.id);

      res.json(foundStudent);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  }
  //3. Create student
  static async createStudent(req, res) {
    try {
      await studentSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      const student = await StudentService.createStudent(req.body);

      res.status(201).json(student);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  }
  //4. Update student
  static async updateStudent(req, res) {
    try {
      await updateStudentSchema.validateAsync(req.body);

      const updatedStudent = await StudentService.updateStudent(
        req.params.id,
        req.body
      );

      res.json(updatedStudent);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  }
  //5. Delete student
  static async deleteStudent(req, res) {
    try {
      await StudentService.deleteStudent(req.params.id);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  }
}
