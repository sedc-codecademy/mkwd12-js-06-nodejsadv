import { Position } from "src/common/enums/position.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}