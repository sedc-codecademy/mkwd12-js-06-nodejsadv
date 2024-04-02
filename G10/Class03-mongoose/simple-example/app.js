import dotenv from "dotenv";
dotenv.config();
import { mongoose } from "mongoose";
import User from "./user.js";

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.wexuuug.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=NodeJSAdvanced`;

mongoose.connect(MONGO_URI);

const userData = {
  name: "Bob",
  age: 30,
  email: "BOB@gmail.com",
  password: "bob12345",
  addrss: {
    street: "Ilindenska",
    city: "Skopje",
  },
};

const userDataTwo = {
  name: "Jill",
  age: 30,
  email: "jill@gmail.com",
  password: "jill12345",
  addrss: {
    street: "Partizanska",
    city: "Skopje",
  },
};

const createUser = async (body) => {
  const user = new User(body); // we create the user model out of the userSchema manually
  console.log(user);
  return await user.save();
};

const createUserTwo = async (body) => {
  return await User.create(body); // mongoose create user model out od the userSchema automatically
};

// const bob = createUser(userData);
// const jill = createUserTwo(userDataTwo);

// findOneAndUpdate // this do not go through validation

const users = await User.find({}); // return all users
// console.log(users);

const usersWithAge30 = await User.find({ age: 30 }); // return ALL usres that match the condition inside the object === filter
// console.log(usersWithAge30);

const userWithAge20 = await User.findOne({ age: 20 }); // return THE FIRST usre that matches the condition inside the object == find
// console.log(userWithAge30);

const jillUser = await User.findById("6607df0e05a91dab8b7bd0fe"); // return the first user that matches the id
// console.log(jillUser);
