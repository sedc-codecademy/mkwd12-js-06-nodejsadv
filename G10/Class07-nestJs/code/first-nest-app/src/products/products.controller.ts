import { Controller, Get, Param, Post, Body, Patch, Put, Delete } from '@nestjs/common';
import { CreateProduct, Product } from 'src/interfaces/product.intrface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    // Dependency injection
    constructor(private readonly productService: ProductsService) {}

    @Get()
    getAll(): Product[] {
        // const service = new ProductsService();
        // return service.getAll();
        return this.productService.getAll();
    }

    @Get(':id')
    getById(@Param() params): Product {
        // const service = new ProductsService();
        const id = params.id;
        // console.log(id);
        // return service.getById(id);
        return this.productService.getById(id);
    }

    @Post()
    create(@Body() body: CreateProduct) {
        return this.productService.create(body);
    }

    @Patch(':id')
    update(@Param() params, @Body() body: Partial<CreateProduct>) {
        const id = params.id;
        return this.productService.update(id, body);
    }

    @Put(':id')
    replace(@Param() params, @Body() body: CreateProduct) {
        const id = params.id;
        return this.productService.replace(id, body);
    }

    @Delete(':id')
    delete(@Param() params): string {
        const id = params.id;
        const isProductDeleted = this.productService.delete(id);
        if(isProductDeleted) {
            return 'Product deleted successfully';
        }
        return 'Delete operation failed'
    }
}
