import { Student } from "../models/student.model.js";

export class StudentService {
  //1. Get all students
  static async getAllStudents(filters) {
    console.log(filters);

    //students?sortBy=age&orderBy=asc&age=40

    const { sortBy, orderBy, firstResult, maxResults, ...basicFilters } =
      filters;

    const sortFilters = {};

    if (sortBy === "age") {
      if (orderBy === "asc") sortFilters.age = 1;
      if (orderBy === "desc") sortFilters.age = -1;
    }

    if (basicFilters.age) basicFilters.age = { $gte: Number(basicFilters.age) };

    const students = await Student.find(basicFilters)
      .sort(sortFilters)
      .limit(maxResults ? Number(maxResults) : 10)
      .skip(firstResult ? Number(firstResult) - 1 : 0);

    const count = await Student.countDocuments();

    return {
      students,
      totalRecords: count,
    };
  }
  //2. Get student by id
  static async getStudentById(studentId) {
    const foundStudent = await Student.findById(studentId);

    if (!foundStudent) throw new Error("Student Not Found");

    return foundStudent;
  }
  //3. Create student
  static async createStudent(studentData) {
    // New student here is not a plain object but it is a mongoose document which contains a lot more methods and information
    // const newStudent = new Student(studentData);
    // save valdiates and then if everything is okay writes the new document in the database
    // const createdStudent = await newStudent.save();

    //Shortened way of doing the above
    const createdStudent = Student.create(studentData);

    return createdStudent;
  }
  //4. Update student
  static async updateStudent(studentId, updateData) {
    const foundStudent = await this.getStudentById(studentId);

    // Object assign takes the target object and addes the properties of the second object to it
    Object.assign(foundStudent, updateData);

    //Saving after updates validates the data before writing it to the database
    const updatedStudent = await foundStudent.save();

    return updatedStudent;
  }

  //5. Delete
  static async deleteStudent(studentId) {
    const response = await Student.findByIdAndDelete(studentId);

    if (!response) throw new Error("Student not found");

    console.log(response);
  }
}
