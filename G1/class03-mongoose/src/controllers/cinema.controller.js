import { CinemaService } from '../services/cinema.service.js';

export class CinemaController {
	static async createCinema(req, res) {
		try {
			const cinema = await CinemaService.createCinema(req.body);

			res.json(cinema);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	}
}
