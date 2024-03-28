import { database } from "../database/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class MovieModel {
  static async getAll() {
    const data = await database.collection("movies").find({}).toArray(); // must add toArray() at the end of the query
    // console.log(data);
    return data;
  }

  static async getById(id) {
    const movie = await database
      .collection("movies")
      .findOne({ _id: new ObjectId(id) });
    return movie;
  }

  static async create(body) {
    return await database.collection("movies").insertOne(body);
  }

  static async update(id, body) {
    return await database
      .collection("movies")
      .updateOne({ _id: new ObjectId(id) }, { $set: body });
  }

  static async replace(id, body) {
    return await database
      .collection("movies")
      .replaceOne({ _id: new ObjectId(id) }, body);
  }

  static async delete(id) {
    return await database
      .collection("movies")
      .deleteOne({ _id: new ObjectId(id) });
  }
}
