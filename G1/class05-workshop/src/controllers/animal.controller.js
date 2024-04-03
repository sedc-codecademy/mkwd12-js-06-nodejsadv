import { AnimalService } from "../services/animal.service.js";
import { animalSchema } from "../schemas/animal.schema.js";

export class AnimalController {
  static async getAnimals(req, res) {
    try {
      const animals = await AnimalService.getAnimals();
      res.status(200).json(animals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAnimal(req, res) {
    try {
      const animal = await AnimalService.getAnimalById(req.params.id);
      res.status(200).json(animal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createAnimal(req, res) {
    try {
      await animalSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      const animal = await AnimalService.createAnimal(req.body);
      res.status(201).json(animal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateAnimal(req, res) {
    try {
      await animalSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      const animal = await AnimalService.updateAnimal(req.params.id, req.body);
      res.status(200).json(animal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteAnimal(req, res) {
    try {
      await AnimalService.deleteAnimal(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
