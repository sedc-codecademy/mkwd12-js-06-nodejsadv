import { readFile, writeFile } from "./fs.service.js";

export const readUsers = async () => {
  const users = await readFile("./db/users.json");

  return users;
};

export const addUser = async (user) => {
  const users = await readUsers();
  users.push(user);
  await writeFile("./db/users.json", users);
};
