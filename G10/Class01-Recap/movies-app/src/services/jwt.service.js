import jwt from "jsonwebtoken";

export default class JwtService {
  static createAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
  };

  static createRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
  };

  static verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  };

  static verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  };
}
