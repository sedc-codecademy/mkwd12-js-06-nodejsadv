import { Router } from 'express';
import { CinemaController } from '../controllers/cinema.controller.js';

// /cinema
export const cinemaRouter = new Router();

cinemaRouter.get('/:id', CinemaController.getCinema);
cinemaRouter.post('/', CinemaController.createCinema);
cinemaRouter.patch('/:cinemaId/movie/:movieId', CinemaController.toggleMovie);
