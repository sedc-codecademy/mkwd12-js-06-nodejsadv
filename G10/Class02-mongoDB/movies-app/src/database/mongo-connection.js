import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;

// add dynamically the variables from .env file
// const MONGO_URI = "mongodb+srv://anetaStankovska:myNodeJSAdvancedCluster@nodejsadvanced.wexuuug.mongodb.net/?retryWrites=true&w=majority&appName=NodeJSAdvanced";
// mongodb+srv://anetaStankovska:<password>@nodejsadvanced.wexuuug.mongodb.net/?retryWrites=true&w=majority&appName=NodeJSAdvanced
// Connection string
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.wexuuug.mongodb.net/?retryWrites=true&w=majority&appName=NodeJSAdvanced`;

const client = new MongoClient(MONGO_URI);

let connection;
export let database;

export async function connectToDatabase() {
  if (!connection) {
    try {
      connection = await client.connect();
      database = connection.db("nodeJsAdvanced");
      console.log("Succesfully connected to MongoDB");
    } catch (error) {
      console.log("Error while connecting to MongoDB", { error });
    }
    return connection;
  }
}

export function getDb() {
  if (!connection) {
    throw new Error("Error while initializing database connection");
  }
  //   console.log(database);
  return database;
}
