import { Router } from 'express';
import { movieRouter } from '../routes/movie.router.js';
import { cinemaRouter } from '../routes/cinema.router.js';

export const globalRouter = Router();

globalRouter.use('/movies', movieRouter);
globalRouter.use('/cinema', cinemaRouter);
