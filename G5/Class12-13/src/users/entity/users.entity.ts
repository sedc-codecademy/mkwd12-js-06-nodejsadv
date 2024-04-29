import { TripORMEntity } from 'src/trip/entity/trip/trip.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserORMEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => TripORMEntity, (trip) => trip.user)
  trips: TripORMEntity[];
}
