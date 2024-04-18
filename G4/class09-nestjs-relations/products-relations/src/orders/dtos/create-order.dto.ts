import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  amount: number;

  @IsString()
  date: string;

  @IsString()
  userId: string;
}
