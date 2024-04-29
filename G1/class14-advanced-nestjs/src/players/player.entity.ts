import { Position } from '../common/enums/position.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
    name: 'matches_played', // in an SQL database the default naming style for columns is snake_case. With this we can specify the name of the column in the database, while we use camelCase in the code.
  })
  @ApiProperty({
    type: Number,
    default: 0,
    example: 0,
  })
  matchesPlayed: number;

  // Many players can belong to one club (many-to-one relationship)
  @ManyToOne(() => Club, (club) => club.players)
  @JoinColumn({
    name: 'club_id', // used to specify which column is used for this relation
  })
  @ApiPropertyOptional({
    type: Club,
  })
  club: Club; // this is not a column in the database, but a property that will be populated with the club data when we fetch a player

  @Column({
    nullable: true, // some players may not belong to a club
    name: 'club_id',
  })
  @ApiProperty({
    type: String,
    nullable: true,
    description: 'The ID of the club where the player actively plays at.',
    example: '51546eab-1ebe-400e-b8cf-2ce48b02f993',
  })
  clubId: string | null;

  @Column({
    type: String,
    nullable: true,
    name: 'created_by',
  })
  @ApiProperty({
    type: String,
    nullable: true,
    description: 'Player record created by user with this email',
    example: 'user@example.com',
  })
  createdBy: string | null;
}
