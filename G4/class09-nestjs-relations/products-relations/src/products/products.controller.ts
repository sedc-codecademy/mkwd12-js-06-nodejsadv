import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/products-filters.interface';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') inStock: string,
    @Query('orderBy') orderBy: 'price' | 'stock',
  ) {
    const filters: ProductFilters = {
      title,
      inStock: Boolean(inStock), // !!inStock
      orderBy,
    };

    return this.productsService.getAllProducts(filters);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }

  @Get(':id/orders')
  getProductOrders(@Param('id') id: string) {
    return this.productsService.getProductOrders(Number(id));
  }

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    return this.productsService.createProduct(productData);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body() updateData: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(Number(productId), updateData);
  }

  @Delete(':id')
  deleteProduct(@Param('id') productId: string) {
    return this.productsService.deleteProduct(Number(productId));
  }
}
