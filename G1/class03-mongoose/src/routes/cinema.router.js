import { Router } from 'express';
import { CinemaController } from '../controllers/cinema.controller.js';

export const cinemaRouter = new Router();

cinemaRouter.get('/:id', CinemaController.getCinema); // Get cinema by id with movies
cinemaRouter.post('/', CinemaController.createCinema); // Create cinema
cinemaRouter.patch('/:cinemaId/movie/:movieId', CinemaController.toggleMovie); // Add or remove movie from cinema
