import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateBudgetDTO } from './dto/budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetORMEntity } from './entity/budget.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(BudgetORMEntity)
    private budgetRepository: Repository<BudgetORMEntity>,
  ) {}
  async updateBudget(id: string, updateBudgetProps: UpdateBudgetDTO) {
    const response = await this.budgetRepository.update(
      { id: id },
      updateBudgetProps,
    );

    if (!response.affected) {
      throw new NotFoundException(`Budget with the id: ${id} was not found`);
    }
  }
}
