import { fileURLToPath } from "node:url";
import path from "node:path";

export const createPath = pathFragments => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  return path.join(__dirname, ...pathFragments);
};
