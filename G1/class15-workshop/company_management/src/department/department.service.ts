import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, MoreThan, FindOptionsWhere } from 'typeorm';
import { Department } from './department.entity';
import { DepartmentCreateDto } from './dto/department-create.dto';
import { DepartmentUpdateDto } from './dto/department-update.dto';
import { DepartmentQueryDto } from './dto/department-query.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  create(createDto: DepartmentCreateDto) {
    const department = this.departmentRepository.create(createDto);
    return this.departmentRepository.save(department);
  }

  findAll(query: DepartmentQueryDto) {
    const where: FindOptionsWhere<Department> = {};

    if (query.name) {
      where.name = Like(`%${query.name}%`);
    }
    if (query.officeLocation) {
      where.officeLocation = Like(`%${query.officeLocation}%`);
    }
    if (query.isActive !== undefined) {
      where.isActive = query.isActive;
    }
    if (query.minBudget !== undefined) {
      where.budget = MoreThan(query.minBudget);
    }

    return this.departmentRepository.find({
      where,
      relations: ['employees'],
    });
  }

  findOne(id: number) {
    return this.departmentRepository.findOne({
      where: { id },
      relations: ['employees'],
    });
  }

  async update(id: number, updateDto: DepartmentUpdateDto) {
    const department = await this.departmentRepository.findOneBy({
      id: id,
    });
    if (!department) {
      throw new NotFoundException(`Department #${id} not found`);
    }

    this.departmentRepository.merge(department, updateDto);

    return this.departmentRepository.save(department);
  }

  async remove(id: number) {
    const department = await this.departmentRepository.findOneBy({ id });
    if (!department) {
      throw new NotFoundException(`Department #${id} not found`);
    }
    return this.departmentRepository.remove(department);
  }
}
