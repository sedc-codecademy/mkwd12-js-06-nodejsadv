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
  id: string

  @Column()
  name: string

  @Column({
    length: 30,
  })
  location: string

  @Column()
  stadium: string

  @Column({default: 0})
  wins: number

  @Column({default: 0})
  lost: number

  @Column({default: 0})
  draws: number

  @Column({
    type: Date,
  })
  foundedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Player, (player) => player.club)
  players:Player[] // TYPE ORM PROPS
}
