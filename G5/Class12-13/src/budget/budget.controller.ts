import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { UpdateBudgetDTO } from './dto/budget.dto';
import { BudgetService } from './budget.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('budget')
export class BudgetController {
  constructor(private budgetService: BudgetService) {}
  @Put(':id')
  async updateBudget(
    @Param('id') id: string,
    @Body() requestBody: UpdateBudgetDTO,
  ) {
    await this.budgetService.updateBudget(id, requestBody);

    return { message: 'Success update budget' };
  }
}
