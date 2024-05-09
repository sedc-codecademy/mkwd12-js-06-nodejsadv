import { Module } from '@nestjs/common';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetORMEntity } from './entity/budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetORMEntity])],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
