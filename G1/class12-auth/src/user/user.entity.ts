import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../common/enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    description: 'The ID of the user',
  })
  id: string;

  @Column({ unique: true })
  @ApiProperty({
    type: String,
    description: 'The username of the user',
  })
  username: string;

  @Column()
  @ApiProperty({
    type: String,
    description: 'The password of the user',
  })
  password: string;

  @Column({
    enum: Role,
    enumName: 'role',
    default: Role.USER,
  })
  @ApiProperty({
    enum: Role,
    description: 'The role of the user',
  })
  role: Role;
}
