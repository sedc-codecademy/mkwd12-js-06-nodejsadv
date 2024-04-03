import { Router } from "express";
import { AnimalController } from "../controllers/animal.controller.js";

export const animalsRouter = Router();

animalsRouter.get("/", AnimalController.getAnimals);
animalsRouter.get("/:id", AnimalController.getAnimal);
animalsRouter.post("/", AnimalController.createAnimal);
animalsRouter.put("/:id", AnimalController.updateAnimal);
animalsRouter.delete("/:id", AnimalController.deleteAnimal);
