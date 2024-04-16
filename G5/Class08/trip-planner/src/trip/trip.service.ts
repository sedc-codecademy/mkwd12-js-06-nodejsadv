import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { Trip, TripCreationProps } from './entity/trip/trip.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TripService {
  private trips: Trip[] = [];

  getTrips() {
    return this.trips;
  }

  createTrip(tripCreationProps: TripCreationProps) {
    const trip: Trip = {
      id: uuid(),
      budget: tripCreationProps.budget,
      destination: tripCreationProps.destination,
      status: tripCreationProps.status,
      notes: tripCreationProps.notes,
      startDate: tripCreationProps.startDate,
      endDate: tripCreationProps.endDate,
      createdAt: new Date().getTime(),
      updatedAt: null,
    };

    this.trips.push(trip);

    return trip.id;
  }

  getTrip(id: string) {
    const trip = this.trips.find((trip) => trip.id === id);

    if (!trip) {
      throw new HttpException(`Trip with id: ${id} is not found`, 404);
    }

    return trip;
  }

  removeTrip(id: string) {
    const trip = this.trips.find((trip) => trip.id === id);

    if (!trip) {
      //NotFoundException is as same as  HttpException but the status code is provided out-of-the-box
      throw new NotFoundException(`Trip with id: ${id} was not found.`);
    }

    this.trips = this.trips.filter((trip) => trip.id !== id);
  }
}
