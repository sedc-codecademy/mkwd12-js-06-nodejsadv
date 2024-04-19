import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Player } from 'src/players/player.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    example: '51546eab-1ebe-400e-b8cf-2ce48b02f993',
  })
  id: string;

  @Column()
  @ApiProperty({
    type: String,
    example: 'Vardar',
  })
  name: string;

  @Column({
    length: 30,
  })
  @ApiProperty({
    type: String,
    maxLength: 30,
    example: 'Skopje, Macedonia',
  })
  location: string;

  @Column()
  @ApiProperty({
    type: String,
    example: 'Gradski Stadion',
  })
  stadium: string;

  @Column()
  @ApiProperty({
    type: String,
    example: 'Bundes League',
  })
  league: string;

  @Column({ default: 0 })
  @ApiProperty({
    type: Number,
    example: 0,
    default: 0,
  })
  wins: number;

  @Column({ default: 0 })
  @ApiProperty({
    type: Number,
    example: 0,
    default: 0,
  })
  losses: number;

  @Column({ default: 0 })
  @ApiProperty({
    type: Number,
    example: 0,
    default: 0,
  })
  draws: number;

  @Column({
    type: Date,
    name: 'founded_at',
  })
  @ApiProperty({
    type: Date,
    example: '1878-01-01 00:00:00',
  })
  foundedAt: Date;

  @OneToMany(() => Player, (player) => player.club)
  @ApiPropertyOptional({
    type: [Player],
  })
  players: Player[];

  @CreateDateColumn({
    name: 'created_at',
  })
  @ApiProperty({
    type: Date,
    example: '1878-01-01 00:00:00',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  @ApiProperty({
    type: Date,
    example: '1878-01-01 00:00:00',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  @ApiProperty({
    type: Date,
    nullable: true,
    example: '1878-01-01 00:00:00',
  })
  deletedAt: Date;
}
