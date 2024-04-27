import { Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripORMEntity } from './entity/trip/trip.entity';
import { BudgetORMEntity } from 'src/budget/entity/budget.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TripORMEntity, BudgetORMEntity]),
    UsersModule,
  ],
  providers: [TripService],
  controllers: [TripController],
})
export class TripModule {}
