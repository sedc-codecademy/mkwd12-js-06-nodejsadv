import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/register", AuthController.registerUser);
authRouter.post("/login", AuthController.loginUser);
authRouter.get("/logout", AuthController.logoutUser);
authRouter.get("/logout-all", AuthController.logoutAll);
authRouter.get("/refresh-token", AuthController.refreshAccessToken);
