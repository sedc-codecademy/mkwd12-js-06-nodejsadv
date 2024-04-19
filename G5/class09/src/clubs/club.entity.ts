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

// @OneToMany decorator defines a one-to-many relationship between the Club and Player entities.
// This decorator specifies that each Club can have multiple associated Player entities.
// The first argument (() => Player) specifies the type of the target entity that the relation is with.
// The second argument is a callback function (player => player.club) that points to the prop from the entity in relation(Player.club).
// This setup indicates how Player entities refer back to the Club entity - via the 'club' property in the Player class.
// Importantly, while this establishes the relationship for ORM purposes it does not create a column in the Club table.
  @OneToMany(() => Player, (player) => player.club)
  players:Player[] // TYPE ORM PROP, it is not stored in the db
}
