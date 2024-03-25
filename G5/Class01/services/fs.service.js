import fsPromises from "fs/promises";

export const readFile = async (path) => {
  const contents = await fsPromises.readFile(path, "utf-8");

  return JSON.parse(contents);
};

export const writeFile = async (path, data) => {
  await fsPromises.writeFile(path, JSON.stringify(data, null, 2));
};
