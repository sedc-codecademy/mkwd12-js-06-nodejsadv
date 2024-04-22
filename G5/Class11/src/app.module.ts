import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripModule } from './trip/trip.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [
    TripModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // host of the database
      port: 5432,
      username: 'postgres',
      password: 'deri', // use envs
      database: 'trips',
      autoLoadEntities: true,
      synchronize: true, // DONT USE TRUE IN PRODUCTION
      // logging: true,
    }),
    BudgetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
