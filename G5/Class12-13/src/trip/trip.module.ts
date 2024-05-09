import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripORMEntity } from './entity/trip/trip.entity';
import { BudgetORMEntity } from 'src/budget/entity/budget.entity';
import { UsersModule } from 'src/users/users.module';
import { TripMiddleware } from './trip.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([TripORMEntity, BudgetORMEntity]),
    UsersModule,
  ],
  providers: [TripService],
  controllers: [TripController],
})
export class TripModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TripMiddleware).forRoutes('/trip');
  }
}
