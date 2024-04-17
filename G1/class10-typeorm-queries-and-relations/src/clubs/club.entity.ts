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
  id: string;

  @Column()
  name: string;

  @Column({
    length: 30,
  })
  location: string;

  @Column()
  stadium: string;

  @Column()
  league: string;

  @Column({ default: 0 })
  wins: number;

  @Column({ default: 0 })
  losses: number;

  @Column({ default: 0 })
  draws: number;

  @Column({
    type: Date,
  })
  foundedAt: Date;

  @OneToMany(() => Player, (player) => player.club)
  players: Player[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

// @CreateDateColumn({
//   type: 'timestamp',
//   default: () => 'CURRENT_TIMESTAMP(6)',
// })
//   @UpdateDateColumn({
//   type: 'timestamp',
//   default: () => 'CURRENT_TIMESTAMP(6)',
//   onUpdate: 'CURRENT_TIMESTAMP(6)',
// })
