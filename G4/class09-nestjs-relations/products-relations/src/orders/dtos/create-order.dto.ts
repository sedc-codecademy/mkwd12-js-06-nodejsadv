import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  amount: number;

  @IsString()
  date: string;

  @IsString()
  user: string;

  @IsArray()
  products: number[];
}
