import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TripService } from './trip.service';
import { TripDTO } from './dto/trip.dto';
import { TripCreationProps } from './entity/trip/trip.interface';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@UseGuards(AuthGuard)
@Controller('trip')
export class TripController {
  constructor(private tripService: TripService) {}

  @Get()
  async listTrips(@Req() request: Request) {
    const userID = request['user'].sub;

    const trips = await this.tripService.getTrips(userID);

    return trips;
  }

  @Post()
  @HttpCode(201)
  async addTrip(@Body() requestBody: TripDTO, @Req() request: Request) {
    console.log('Request body', requestBody);

    console.log('USER IN ADD TRIP FROM REQUEST', request['user']);

    const userID = request['user'].sub;

    // Mapper function
    const tripCreationProps: TripCreationProps = {
      budget: requestBody.budget,
      destination: requestBody.destination,
      notes: requestBody.notes,
      status: requestBody.status,
      startDate: requestBody.startDate,
      endDate: requestBody.endDate,
    };

    const id = await this.tripService.createTrip(tripCreationProps, userID);

    return { message: 'Success created', tripId: id };
  }

  @Get(':id')
  async getTrip(@Param('id') id: string) {
    const trip = await this.tripService.getTrip(id);

    return trip;
  }

  @Delete(':id')
  async deleteTrip(@Param('id') id: string) {
    await this.tripService.removeTrip(id);

    return { message: 'Delete success' };
  }

  @Put(':id') // localhost:3000/trip/id => http method: PUT
  updateTrip(@Param('id') id: string) {}
}
