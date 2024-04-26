import { IsArray, IsNumber, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @Min(0)
  amount: number;

  @IsString()
  user: string;

  @IsString({ each: true })
  products: string[];
}
