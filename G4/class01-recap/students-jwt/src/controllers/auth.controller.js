import {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../const/jwt.const.js";
import { AuthModel } from "../models/auth.model.js";

export class AuthController {
  //1. Register user
  static async registerUser(req, res) {
    try {
      const newUser = await AuthModel.registerUser(req.body);

      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
  //2. Login user
  static async loginUser(req, res) {
    try {
      const user = await AuthModel.loginUser(req.body);

      //Creating a token after successful login
      const accessToken = createAccessToken(user.id);
      const refreshToken = createRefreshToken(user.id);

      //Saving refresh token in database
      await AuthModel.saveRefreshToken(user.id, refreshToken);

      //res.set sets a header in the response with the given name and value
      res.set("access-control-expose-headers", "access-token,refresh-token");
      res.set("access-token", accessToken);
      res.set("refresh-token", refreshToken);

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ msg: error.message });
    }
  }

  //3. Logout user
  static async logoutUser(req, res) {
    try {
      const refreshToken = req.headers["refresh-token"];

      const { userId } = verifyRefreshToken(refreshToken);

      await AuthModel.deleteRefreshToken(userId, refreshToken);

      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }

  //4. Refresh access token
  static async refreshAccessToken(req, res) {
    try {
      const refreshToken = req.headers["refresh-token"];

      if (!refreshToken) throw new Error();

      // Try to verify token
      const { userId } = verifyRefreshToken(refreshToken);

      const foundUser = await AuthModel.getUserById(userId);

      const refreshTokenExists = foundUser.refreshTokens.some(
        token => token === refreshToken
      );

      if (!refreshTokenExists) throw new Error();

      const accessToken = createAccessToken(foundUser.id);

      res.set("access-control-expose-headers", "access-token,refresh-token");
      res.set("access-token", accessToken);

      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.sendStatus(403);
    }
  }

  //5. Logout all
  static async logoutAll(req, res) {
    try {
      const refreshToken = req.headers["refresh-token"];

      if (!refreshToken) throw new Error();

      const { userId } = verifyRefreshToken(refreshToken);

      await AuthModel.deleteAllRefreshTokens(userId);

      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
}
