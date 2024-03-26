import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", AuthController.loginUser);
router.post("/logout/:id", AuthController.logoutUser);

export default router;
