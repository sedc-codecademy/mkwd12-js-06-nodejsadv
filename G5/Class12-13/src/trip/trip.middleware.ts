import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class TripMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('THIS MIDDLEWARE IS FOR TRIP ROUTES ONLY');
    next();
  }
}
