import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);

// we declare empty variable, later we gonna assign the database value to it.
let dbConnection;

export const mongoConnection = async () => {
  // check if dbConnection is undefined, meaning we have no DB connection yet.
  if (!dbConnection) {
    try {
      // we connect with our mongo atlas :)
      await client.connect();
      // connect with the data base we have created, and assign that value to dbConnection
      dbConnection = client.db("ecommerce-store");
      console.log("Connected to MONGO DB");
    } catch (error) {
      console.error("Cannot connect to mongo db");
      throw new Error(error);
    }
  }
};

export const getDatabase = () => {
  if (!dbConnection) {
    throw new Error("Database connection not inited.");
  }
  return dbConnection;
};
