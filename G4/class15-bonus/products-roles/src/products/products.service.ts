import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/products-filters.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}

  getAllProducts(filters: ProductFilters) {
    const filterConfig: FindManyOptions<Product> = {};

    console.log(filters);

    if (filters.title) {
      filterConfig.where = { title: filters.title };
    }

    if (filters.inStock) {
      filterConfig.where = { ...filterConfig.where, stock: MoreThan(0) };
    }

    if (filters.orderBy) {
      if (filters.orderBy === 'price') filterConfig.order = { price: 'ASC' };
      if (filters.orderBy === 'stock') filterConfig.order = { stock: 'ASC' };
    }

    console.log(filterConfig);

    return this.productsRepo.find(filterConfig);
  }

  async getProductById(id: number) {
    const foundProduct = await this.productsRepo.findOneBy({ id });

    if (!foundProduct) throw new NotFoundException('Product not found');

    return foundProduct;
  }

  async getProductOrders(id: number) {
    const foundProduct = await this.productsRepo.findOne({
      where: { id },
      relations: {
        orders: true,
      },
    });

    if (!foundProduct) throw new NotFoundException('Product not found');

    return foundProduct;
  }

  createProduct(productData: CreateProductDto) {
    return this.productsRepo.save(productData);
  }

  async updateProduct(productId: number, updateData: UpdateProductDto) {
    const foundProduct = await this.getProductById(productId);

    Object.assign(foundProduct, updateData);

    // const updatedProduct = {...foundProduct, updateData}

    //This will update the product instead of creating a new one becasue we sent a full entity object with id
    await this.productsRepo.save(foundProduct);
  }

  async deleteProduct(productId: number) {
    const foundProduct = await this.getProductById(productId);

    await this.productsRepo.remove(foundProduct);
  }
}
