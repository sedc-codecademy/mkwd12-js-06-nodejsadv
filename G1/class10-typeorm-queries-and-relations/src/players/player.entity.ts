import { IsString, MinLength } from 'class-validator';
import { Position } from '../common/enums/position.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String, //'string',
    length: 30, // validates on DB insertion
  })
  // @MinLength(30) // validates on initializing the Player class before inserting in the DB
  name: string;

  @Column()
  age: number;

  @Column({
    enum: Position,
    enumName: 'position',
  })
  position: Position;

  @Column()
  country: string;

  @Column({
    default: 0,
  })
  goals: number;

  @Column({
    default: 0,
  })
  assists: number;

  @Column({
    default: 0,
  })
  saves: number;

  @Column({
    default: 0,
  })
  matchesPlayed: number;
}
