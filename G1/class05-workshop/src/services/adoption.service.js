import { Adoption } from "../models/adoption.model.js";
import { Animal } from "../models/animal.model.js";
import { STATUS } from "../const/status.const.js";

export class AdoptionService {
  static async getAdoptions() {
    return Adoption.find().populate("animal");
  }

  static async createAdoption(adoption) {
    const animal = await Animal.findById(adoption.animal);

    if (!animal) {
      throw new Error("Animal not found");
    }

    const createdAdoption = await Adoption.create(adoption);

    await Animal.findByIdAndUpdate(adoption.animal, { status: STATUS.ADOPTED });

    return createdAdoption;
  }
}
