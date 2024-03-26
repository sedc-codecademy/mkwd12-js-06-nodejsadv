import fs from "fs/promises";

export default class DataService {
  static async readData(path) {
    const res = await fs.readFile(path, { encoding: "utf-8" });
    return JSON.parse(res);
  }

  static async writeData(path, data = []) {
    await fs.writeFile(path, JSON.stringify(data, null));
  }
}
