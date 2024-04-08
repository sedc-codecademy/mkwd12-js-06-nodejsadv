import { Controller, Get, Next, Param, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { NextFunction } from 'express';

// '/'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // router.get('/')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/:name')
  // @Param() params: any
  // getName(
  //   @Req() req: Request,
  //   @Res() res: any,
  //   @Next() next: NextFunction,
  //   @Param('name') name: string,
  //   @Query('color') color: string,
  // ): void {
  //   console.log(color);
  //   // console.log('REQUEST', req);
  //   // console.log('RESPONSE', res);
  //   // console.log('NEXT', next);
  //   console.log(name);
  //   // return 'test';
  //   res.status(200).send(name);
  // }
}
