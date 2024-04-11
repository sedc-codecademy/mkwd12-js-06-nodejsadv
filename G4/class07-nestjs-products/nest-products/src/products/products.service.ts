import { Injectable, NotFoundException } from "@nestjs/common";
import { writeFile, readFile } from "node:fs/promises";
import { join } from "node:path";
import { Product } from "./interfaces/product.interface";
import { CreateProductDto } from "./dtos/create-product.dto";
import { v4 as uuid } from "uuid";
import { UpdateProductDto } from "./dtos/update-product.dto";

@Injectable()
export class ProductsService {
  async getAllProducts() {
    const productsJSON = await readFile(
      join(process.cwd(), "src", "products", "data", "products.json"),
      "utf-8"
    );

    const products: Product[] = JSON.parse(productsJSON);

    return products;
  }

  async saveProducts(products: Product[]) {
    await writeFile(
      join(process.cwd(), "src", "products", "data", "products.json"),
      JSON.stringify(products, null, 2),
      "utf-8"
    );
  }

  async getProductById(productId: string) {
    const products = await this.getAllProducts();

    const foundProduct = products.find(product => product.id === productId);

    if (!foundProduct) throw new NotFoundException("Product not found");

    return foundProduct;
  }

  async createProduct(productData: CreateProductDto) {
    const products = await this.getAllProducts();

    const newProduct: Product = {
      id: uuid(),
      ...productData,
    };

    products.push(newProduct);

    await this.saveProducts(products);

    return newProduct;
  }

  async updateProduct(productId: string, updateData: UpdateProductDto) {
    const products = await this.getAllProducts();

    const productExists = products.some(product => product.id === productId);

    if (!productExists) throw new NotFoundException("Product not found");

    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, ...updateData };
      } else {
        return product;
      }
    });

    await this.saveProducts(updatedProducts);
  }

  async deleteProduct(productId: string) {
    const products = await this.getAllProducts();

    const updatedProducts = products.filter(
      product => product.id !== productId
    );

    if (products.length === updatedProducts.length)
      throw new NotFoundException("Product not found");

    await this.saveProducts(updatedProducts);
  }
}
