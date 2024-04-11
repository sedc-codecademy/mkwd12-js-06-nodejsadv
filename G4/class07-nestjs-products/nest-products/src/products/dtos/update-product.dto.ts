import { IsString, Length, IsNumber, Min, IsOptional } from "class-validator";

export class UpdateProductDto {
  @IsString()
  @Length(3, 30)
  @IsOptional()
  title: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  stock: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price: number;
}
