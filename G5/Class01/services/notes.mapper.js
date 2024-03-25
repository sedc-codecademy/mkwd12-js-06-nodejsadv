export const mapNotesRequestBody = (requestBody) => {
  const mappedIntoDomain = {
    title: requestBody.rawTitle,
    description: requestBody.rawDescription,
  };

  return mappedIntoDomain;
};
