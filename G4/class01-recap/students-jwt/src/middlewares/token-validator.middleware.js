import { verifyAccessToken } from "../const/jwt.const.js";
import { AuthModel } from "../models/auth.model.js";

export const tokenValidator = async (req, res, next) => {
  try {
    //Checking if header exists
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) throw new Error();

    //Extrating token from header
    const token = authorizationHeader.split(" ")[1];

    //Trying to verify token and extracting payload
    const { userId } = verifyAccessToken(token);

    console.log(userId);

    await AuthModel.getUserById(userId);

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};
