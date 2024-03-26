import { fileURLToPath } from "url";
import path from "path";

export const createPath = (pathFragments) => {
  const currentFileURL = import.meta.url;
  const currentFilePath = fileURLToPath(currentFileURL);
  const directoryName = path.dirname(currentFilePath);
  return path.join(directoryName, ...pathFragments);
};
