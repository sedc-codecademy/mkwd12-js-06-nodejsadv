export const notesRequestValidator = (req, res, next) => {
  const requstBody = req.body;

  if (!requstBody.rawTitle || !requstBody.rawDescription) {
    return res.status(400).send({ message: "Title or description is invalid" });
  }

  next();
};
