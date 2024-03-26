import DataService from "../services/data.service.js";
import { createPath } from "../utils/utils.js";
import bcrypt from "bcryptjs";

const usersPath = createPath(["..", "..", "db", "users.json"]);

export default class AuthModel {
  static async getAll() {
    return await DataService.readData(usersPath);
  }

  static async getById(id) {
    const users = await this.getAll();
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
      throw new Error("User not found");
    }
    return foundUser;
  }

  static async login(userCredentials) {
    const users = await this.getAll();
    const { email, password } = userCredentials;
    const foundUser = users.find((user) => user.email === email);
    if (!foundUser) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }
    delete foundUser.password;
    return foundUser;
  }

  static async logout(id) {
    const foundUser = await this.getById(id);
    if (!foundUser) {
      throw new Error("The user does exist");
    }
    return foundUser;
  }
}
