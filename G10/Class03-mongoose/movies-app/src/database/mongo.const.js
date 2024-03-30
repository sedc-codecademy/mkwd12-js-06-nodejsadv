import dotenv from "dotenv";
dotenv.config();

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

// Dynamically adding variables from .env file
export const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.wexuuug.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=NodeJSAdvanced`;
