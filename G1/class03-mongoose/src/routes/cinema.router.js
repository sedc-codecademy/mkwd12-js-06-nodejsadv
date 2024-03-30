import { Router } from 'express';
import { CinemaController } from '../controllers/cinema.controller.js';

export const cinemaRouter = new Router();

cinemaRouter.post('/', CinemaController.createCinema);
