import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";
import { Response } from "express";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(":id")
  getProductById(@Param("id") productId: string) {
    return this.productsService.getProductById(productId);
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productsService.createProduct(body);
  }

  @Patch(":id")
  updateProduct(
    @Param("id") productId: string,
    @Body() updateData: UpdateProductDto
  ) {
    return this.productsService.updateProduct(productId, updateData);
  }

  @Delete(":id")
  async deleteProduct(@Res() res: Response, @Param("id") productId: string) {
    await this.productsService.deleteProduct(productId);

    res.sendStatus(204);
  }
}
