import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
} from '@nestjs/common';
import { TripService } from './trip.service';
import { Response } from 'express';
import { TripDTO } from './dto/trip.dto';
import { TripCreationProps } from './entity/trip/trip.interface';

@Controller('trip')
export class TripController {
  constructor(private tripService: TripService) {}

  // ** Accessing the response native object of express **
  // @Get() // localhost:3000/trip & http method => GET
  // listTrips(
  //   @Res() response: Response, // native usage of EXPRESS response object
  // ) {
  //   const trips = this.tripService.getTrips();

  //   response.send(trips); // native response using express
  // }

  // SAME AS ABOVE BUT USING NEST
  @Get() // localhost:3000/trip & http method => GET
  listTrips() {
    const trips = this.tripService.getTrips();

    // Nest automatically will set the response for us
    return trips; // reccomended way while using nest
  }

  @Post()
  @HttpCode(200) // providing our own status code =)
  addTrip(@Body() requestBody: TripDTO) {
    // req.body
    console.log('Request body', requestBody);

    // Mapper function
    const tripCreationProps: TripCreationProps = {
      budget: requestBody.budget,
      destination: requestBody.destination,
      notes: requestBody.notes,
      status: requestBody.status,
      startDate: requestBody.startDate,
      endDate: requestBody.endDate,
    };

    const id = this.tripService.createTrip(tripCreationProps);

    // http respons
    // res.send({ message: 'Success created', tripId: id })
    // nest is handling the response
    return { message: 'Success created', tripId: id };
  }

  // localhost:3000/trip/some_id
  @Get(':id')
  // request.params.id in nodejs
  getTrip(@Param('id') id: string) {
    console.log('request param:', id);

    const trip = this.tripService.getTrip(id);

    // http response
    return trip;
  }

  @Delete(':id') // localhost:3000/trip/id => http method: DELETE
  deleteTrip(@Param('id') id: string) {
    this.tripService.removeTrip(id);

    return { message: 'Delete success' };
  }

  @Put(':id') // localhost:3000/trip/id => http method: PUT
  updateTrip(@Param('id') id: string) {}
}
