import { Router } from "express";
import { AdoptionController } from "../controllers/adoption.controller.js";

export const adoptionsRouter = Router();

adoptionsRouter.get("/", AdoptionController.getAdoptions);
adoptionsRouter.post("/", AdoptionController.createAdoption);
