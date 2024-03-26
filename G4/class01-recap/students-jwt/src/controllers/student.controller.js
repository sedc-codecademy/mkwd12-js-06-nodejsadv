import { StudentModel } from "../models/student.model.js";

export class StudentController {
  //1. Get all students
  static async getAllStudents(req, res) {
    try {
      const students = await StudentModel.getAllStudents();

      return res.json(students);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }

  //2. Get student by id
  static async getStudentById(req, res) {
    try {
      const { id: studentId } = req.params;

      const foundStudent = await StudentModel.getStudentById(studentId);

      return res.json(foundStudent);
    } catch (error) {
      return res.status(404).json({ msg: error.message });
    }
  }

  //3. Create student
  static async createStudent(req, res) {
    try {
      const studentData = req.body;

      const newStudent = await StudentModel.createStudent(studentData);

      return res.status(201).json(newStudent);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  }

  //4. Update student
  static async updateStudent(req, res) {
    try {
      const updateData = req.body;
      const studentId = req.params.id;

      const updatedStudent = await StudentModel.updateStudent(
        studentId,
        updateData
      );

      return res.json(updatedStudent);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  }
  //5. Delete student
  static async deleteStudent(req, res) {
    try {
      await StudentModel.deleteStudent(req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).json({ msg: error.message });
    }
  }

  //6. Delete all students
  static async deleteAllStudents(req, res) {
    try {
      await StudentModel.deleteAllStudents();

      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
}
