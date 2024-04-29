import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNumber } from 'class-validator';
import { Currency } from 'src/trip/entity/trip/trip.interface';

class BudgetDTO {
  @IsEnum(Currency)
  currency: Currency;

  @IsNumber()
  amount: number;
}

export class UpdateBudgetDTO extends PartialType(BudgetDTO) {}
