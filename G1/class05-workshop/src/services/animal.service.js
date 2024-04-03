import { Animal } from "../models/animal.model.js";

export class AnimalService {
  static async getAnimals() {
    return Animal.find();
  }

  static async getAnimalById(id) {
    return Animal.findById(id);
  }

  static async createAnimal(animal) {
    return Animal.create(animal);
  }

  static async updateAnimal(id, animal) {
    return Animal.findByIdAndUpdate(id, animal, { new: true });
  }

  static async deleteAnimal(id) {
    return Animal.findByIdAndDelete(id);
  }
}
