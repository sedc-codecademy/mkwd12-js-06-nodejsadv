import AuthModel from "../models/auth.model.js";
import JwtService from "../services/jwt.service.js";

export default class AuthControler {
  static async loginUser(req, res) {
    try {
      const credentials = req.body;
      const user = await AuthModel.login(credentials);
      const accessToken = JwtService.createAccessToken(user.id);
      res.setHeader("Authorization", accessToken);
      res.status(200).send({ user, accessToken });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }

  static async logoutUser(req, res) {
    try {
      const userId = req.params.id;
      const foundUser = await AuthModel.logout(userId);
      res.removeHeader("Authorization");
      res
        .status(200)
        .send({ message: `User with email ${foundUser.email} logged out` });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
}
