import AuthModel from "../models/auth.model.js";
import JwtService from "../services/jwt.service.js";

export const checkTokenValidity = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.sendStatus(403);
    }

    const token = authorizationHeader.split(" ")[1];
    const tokenContent = JwtService.verifyAccessToken(token);
    const userId = tokenContent.userId;

    const user = await AuthModel.getById(userId);

    if (!user) {
      return res.sendStatus(403);
    }

    delete user.password;
    req.user = user;

    next();
  } catch (error) {
    res.status(403).send({ message: error.message });
  }
};
