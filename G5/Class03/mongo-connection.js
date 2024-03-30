import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // to be able to read .env values =)

export const mongo_connection = async () => {
  // STEP #1 => Connect with mongo db atlas using mongoose
  /**
   * as first argument we provide the connection string to mongo atlas
   * as a second argument we provide options and we can specify
   * to which DB (dbName) we want to connect
   */
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "store_db",
    });
    console.log("Connection with mongo success.");
  } catch (error) {
    throw new Error("Connection to mongo database failed.");
  }
};
