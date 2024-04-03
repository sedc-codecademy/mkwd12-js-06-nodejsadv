import { AdoptionService } from "../services/adoption.service.js";
import { adoptionSchema } from "../schemas/adoption.schema.js";

export class AdoptionController {
  static async getAdoptions(req, res) {
    try {
      const adoptions = await AdoptionService.getAdoptions();

      res.json(adoptions);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async createAdoption(req, res) {
    try {
      await adoptionSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      const adoption = await AdoptionService.createAdoption(req.body);

      res.json(adoption);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}
