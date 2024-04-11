import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get("/academy")
  getAcademyName(@Res() res: Response, @Req() req: Request) { //Always add the types Request and Response from express and be careful with fast fingers on the autocomplete
    //When using the @Res() decorator you must return a valid res.send or res.json or res.sendstatus as in a express middleware otherwise the function will not work
    const academyName = this.appService.getAcademy()
    res.send(academyName)

    // return this.appService.getAcademy()
  }
}
