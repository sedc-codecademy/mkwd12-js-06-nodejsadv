import { readFile, writeFile } from "node:fs/promises";

export class DataService {
  //1. Read file
  static async readJSONFile(path) {
    const stringData = await readFile(path, "utf-8");

    return JSON.parse(stringData);
  }

  //2. Save file
  static async saveJSONFile(path, data) {
    return writeFile(path, JSON.stringify(data, null, 2));
  }
}
