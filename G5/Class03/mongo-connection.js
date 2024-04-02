import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // to be able to read .env values =)

export const mongo_connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "book_and_go",
    });
    console.log("Connection with mongo success.");
  } catch (error) {
    throw new Error("Connection to mongo database failed.");
  }
};
