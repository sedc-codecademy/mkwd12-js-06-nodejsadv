import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/products-filters.interface';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Products')
@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiQuery({
    name: 'title',
    required: false,
  })
  @ApiQuery({
    name: 'inStock',
    required: false,
  })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    example: 'price or stock',
  })
  @ApiQuery({
    name: 'firstResult',
    required: false,
  })
  @ApiQuery({
    name: 'maxResults',
    required: false,
  })
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') inStock: string,
    @Query('orderBy') orderBy: 'price' | 'stock',
    @Query('firstResult') firstResult: string,
    @Query('maxResults') maxResults: string,
  ) {
    const filters: ProductFilters = {
      title,
      inStock: Boolean(inStock), // !!inStock
      orderBy,
    };

    filters.firstResult = firstResult ? Number(firstResult) - 1 : 0;
    filters.maxResults = maxResults ? Number(maxResults) : 10;

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
