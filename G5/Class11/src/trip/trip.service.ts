import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { Budget, Trip, TripCreationProps } from './entity/trip/trip.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { TripORMEntity } from './entity/trip/trip.entity';
import { Repository } from 'typeorm';
import { BudgetORMEntity } from 'src/budget/entity/budget.entity';

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(TripORMEntity)
    private tripRepository: Repository<TripORMEntity>,

    @InjectRepository(BudgetORMEntity)
    private budgetRepository: Repository<BudgetORMEntity>,
  ) {}

  async getTrips() {
    const trips = await this.tripRepository.find({ relations: ['budget'] });
    return trips;
  }

  async createTrip(tripCreationProps: TripCreationProps) {
    // 1. Create the budget
    const budgetProps: Budget = {
      amount: tripCreationProps.budget.amount,
      currency: tripCreationProps.budget.currency,
    };

    const budgetEntity = this.budgetRepository.create(budgetProps);
    await this.budgetRepository.save(budgetEntity);

    // 2. Create the trip
    const trip: Trip = {
      destination: tripCreationProps.destination,
      status: tripCreationProps.status,
      notes: tripCreationProps.notes,
      startDate: tripCreationProps.startDate,
      endDate: tripCreationProps.endDate,
      createdAt: new Date().getTime(),
      updatedAt: null,
    };

    const tripEntity = this.tripRepository.create({
      ...trip,
      budget: budgetEntity,
    });

    await this.tripRepository.save(tripEntity);

    return tripEntity.id;
  }

  async getTrip(id: string) {
    const trip = await this.tripRepository.findOne({
      where: { id: id }, // trip.id === id
      relations: ['budget'],
    });

    if (!trip) {
      throw new HttpException(`Trip with id: ${id} is not found`, 404);
    }

    return trip;
  }

  async removeTrip(id: string) {
    const trip = await this.getTrip(id);
    const budgetID = trip.budget.id;

    // 1. DELETE THE CORESPONDING BUDGET OF THE TRIP
    await this.budgetRepository.delete({ id: budgetID });
    // 2. REMOVE THE ACTUAL TRIP
    const response = await this.tripRepository.delete({ id: id }); // trip.id === id
    console.log(response);

    if (!response.affected) {
      throw new NotFoundException(`Trip with id: ${id} was not found.`);
    }
  }
}
