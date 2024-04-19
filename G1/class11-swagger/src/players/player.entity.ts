import { Position } from '../common/enums/position.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Club } from '../clubs/club.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    description: 'The id of the player',
    example: '22964c0d-6a0a-4ca8-a52d-e9d68662e908',
  })
  id: string;

  @Column({
    type: String, //'string',
    length: 30, // validates on DB insertion
  })
  @ApiProperty({
    type: String,
    example: 'Lionel Messi',
  })
  name: string;

  @Column()
  @ApiProperty({
    type: Number,
    example: 30,
  })
  age: number;

  @Column({
    enum: Position,
    enumName: 'position',
  })
  @ApiProperty({
    enum: Position,
    example: Position.DF,
  })
  position: Position;

  @Column()
  @ApiProperty({
    type: String,
    example: 'Macedonia',
  })
  country: string;

  @Column({
    default: 0,
  })
  @ApiProperty({
    type: Number,
    default: 0,
    example: 0,
  })
  goals: number;

  @Column({
    default: 0,
  })
  @ApiProperty({
    type: Number,
    default: 0,
    example: 0,
  })
  assists: number;

  @Column({
    default: 0,
  })
  @ApiProperty({
    type: Number,
    default: 0,
    example: 0,
  })
  saves: number;

  @Column({
    default: 0,
    name: 'matches_played',
  })
  @ApiProperty({
    type: Number,
    default: 0,
    example: 0,
  })
  matchesPlayed: number;

  @ManyToOne(() => Club, (club) => club.players)
  @JoinColumn({
    name: 'club_id',
  })
  @ApiPropertyOptional({
    type: Club,
  })
  club: Club;

  @Column({
    nullable: true,
    name: 'club_id',
  })
  @ApiProperty({
    type: String,
    nullable: true,
    description: 'The ID of the club where the player actively plays at.',
    example: '51546eab-1ebe-400e-b8cf-2ce48b02f993',
  })
  clubId: string | null;
}
