import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  Like,
  MoreThan,
  LessThan,
  Between,
  FindManyOptions,
  FindOptionsWhere,
} from 'typeorm';
import { Employee } from './employee.entity';
import { EmployeeCreateDto } from './dto/employee-create.dto';
import { EmployeeUpdateDto } from './dto/employee-update.dto';
import { EmployeeQueryDto } from './dto/employee-query.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  create(createDto: EmployeeCreateDto) {
    const employee = this.employeeRepository.create(createDto);
    console.log(employee);
    return this.employeeRepository.save(employee);
  }

  findAll(query: EmployeeQueryDto) {
    const where: FindOptionsWhere<Employee> = {};

    if (query.name) {
      where.name = Like(`%${query.name}%`);
    }
    if (query.jobTitle) {
      where.jobTitle = query.jobTitle;
    }
    if (query.payType) {
      where.payType = query.payType;
    }
    if (query.isActive !== undefined) {
      where.isActive = query.isActive;
      console.log(where);
    }
    if (query.minPayRate !== undefined && query.maxPayRate !== undefined) {
      where.payRate = Between(query.minPayRate, query.maxPayRate);
    } else if (query.minPayRate !== undefined) {
      where.payRate = MoreThan(query.minPayRate);
    } else if (query.maxPayRate !== undefined) {
      where.payRate = LessThan(query.maxPayRate);
    }

    return this.employeeRepository.find({ where });
  }

  findOne(id: number) {
    return this.employeeRepository.findOne({
      where: { id },
      relations: ['department'],
    });
  }

  async update(id: number, updateDto: EmployeeUpdateDto) {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new Error(`Employee #${id} not found`);
    }

    this.employeeRepository.merge(employee, updateDto);

    return this.employeeRepository.save(employee);
  }

  async remove(id: number) {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new Error(`Employee #${id} not found`);
    }
    return this.employeeRepository.remove(employee);
  }
}
