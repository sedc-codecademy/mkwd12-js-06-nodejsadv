import { Budget, Currency, Status } from '../entity/trip/trip.interface';
import {
  IsNotEmpty,
  IsNumber,
  MinLength,
  IsEnum,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class BudgetDTO {
  @IsEnum(Currency)
  currency: Currency;

  @IsNumber()
  amount: number;
}

// The structure of the Request body
// DTO => Data transfer object
export class TripDTO {
  // Validating object that will arrive as property
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BudgetDTO)
  budget: BudgetDTO;

  @IsNotEmpty()
  @MinLength(2)
  destination: string;

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @IsNotEmpty()
  @MinLength(2)
  notes: string;

  @IsNotEmpty()
  @IsNumber()
  startDate: number;

  @IsNotEmpty()
  @IsNumber()
  endDate: number;
}
