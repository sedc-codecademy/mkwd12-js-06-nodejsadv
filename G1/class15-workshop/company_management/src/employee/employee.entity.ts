import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Department } from '../department/department.entity';
import { PayType } from '../common/pay-type.enum';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the employee',
  })
  id: number;

  @Column({ length: 100 })
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the employee',
  })
  name: string;

  @Column({ unique: true })
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email address of the employee',
  })
  email: string;

  @Column({ length: 20 })
  @ApiProperty({
    example: '+40712345678',
    description: 'Phone number of the employee',
  })
  phone: string;

  @Column()
  @ApiProperty({
    example: '2024-05-07T08:10:25.116Z',
    type: 'string',
    format: 'date-time',
    description: 'Hire date of the employee',
  })
  hireDate: Date;

  @Column({ length: 100 })
  @ApiProperty({
    example: 'Software Developer',
    description: 'Job title of the employee',
  })
  jobTitle: string;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({ name: 'department_id' })
  @ApiProperty({
    type: () => Department,
    description: 'Department the employee belongs to',
  })
  department: Department;

  @Column({ name: 'department_id' })
  departmentId: number;

  @Column('decimal', { precision: 10, scale: 2 })
  @ApiProperty({ example: 1000, description: 'Pay rate of the employee' })
  payRate: number;

  @Column({
    type: 'enum',
    enum: PayType,
  })
  @ApiProperty({
    enum: PayType,
    enumName: 'PayType',
    description: 'Type of pay (hourly, weekly, monthly)',
  })
  payType: PayType;

  @Column({
    type: Boolean,
  })
  @ApiProperty({ example: true, description: 'Active status of the employee' })
  isActive: boolean;
}
