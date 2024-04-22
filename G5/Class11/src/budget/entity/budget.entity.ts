import { TripORMEntity } from 'src/trip/entity/trip/trip.entity';
import { Currency } from 'src/trip/entity/trip/trip.interface';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity({ name: 'budget' })
export class BudgetORMEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  currency: Currency;

  @Column()
  amount: number;

  @OneToOne(() => TripORMEntity, (trip) => trip.budget)
  trip: TripORMEntity;
}
