import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Employee } from '../employee/employee.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the department',
  })
  id: number;

  @Column({ length: 100 })
  @ApiProperty({ example: 'IT', description: 'Name of the department' })
  name: string;

  @Column({ type: 'text' })
  @ApiProperty({
    example: 'Information Technology Department',
    description: 'Description of the department',
  })
  description: string;

  @Column()
  @ApiProperty({
    example: true,
    description: 'Active status of the department',
  })
  isActive: boolean;

  @OneToMany(() => Employee, (employee) => employee.department)
  @ApiProperty({
    type: [Employee],
    description: 'Employees belonging to the department',
  })
  employees: Employee[];

  @Column({ length: 100 })
  @ApiProperty({
    example: 'New York',
    description: 'Office location of the department',
  })
  officeLocation: string;

  @Column('decimal', { precision: 12, scale: 2 })
  @ApiProperty({ example: 100000, description: 'Budget of the department' })
  budget: number;
}
