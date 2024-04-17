import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 200,
  })
  address: string;

  @Column({
    length: 30,
  })
  telephone: string;

  @Column()
  dateOfBirth: Date;
}
