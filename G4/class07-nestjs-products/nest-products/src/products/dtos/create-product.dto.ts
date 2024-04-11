import { IsNumber, IsString, Length, Min } from "class-validator";

export class CreateProductDto {
  @IsString()
  @Length(3, 30)
  title: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsNumber()
  @Min(0)
  price: number;
}
