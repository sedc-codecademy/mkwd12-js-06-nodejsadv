import { Club } from "src/clubs/club.entity";
import { Position } from "src/common/enums/position.enum";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// An entity represents a specific type of data that you want to model and store in a database.
@Entity()
export class Player{
    // @PrimaryGeneratedColumn() creates a primary column which value will be automatically generated with an auto-increment value. 
    // It will create int column with auto-increment/serial/sequence/identity (depend on the database and configuration provided). 
    // Besides "uuid" there is also "increment", "identity"
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar'
    })
    name: string;

    @Column()
    age: number;

    @Column({
        enum: Position,
        enumName: 'position',
    })
    position: Position

    @Column()
    country: string

    @Column({
        default: 0,
    })
    goals: number

    @Column({
        default: 0,
    })
    assits: number

    @Column({
        default: 0,
    })
    saves: number

    @Column({
        default: 0,
    })
    matchesPlayed: number

   // @ManyToOne decorator establishes a many-to-one relationship between the Player and Club entities.
   // This means many instances of Player can be stored/can live in one instance of Club.
   // The first argument (() => Club) specifies the target entity that the relationship is with.
   // The second argument (club => club.players) points to the prop from the entity in relation(Club.players).
    @ManyToOne(() => Club, (club) => club.players)
    @JoinColumn({name:"clubId"})
    club:Club // TYPE ORM PROP, it is not stored in the db


    //Player entity it the "owner" of the relation,
    // Meaning it holds the id of the club in relation
    //This is a DB property.
    @Column({
        nullable:true
    })
    clubId:string
}