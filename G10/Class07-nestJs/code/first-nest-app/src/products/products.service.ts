import { Injectable } from '@nestjs/common';
import { products } from 'data/products';
import { CreateProduct, Product } from 'src/interfaces/product.intrface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {

    private _products = products;

    getAll(): Product[] {
        return this._products;
    }

    getById(id: string): Product {
        return this._products.find(product => product.id === id);
    }

    create(body: CreateProduct): Product {
        const id = uuid();
        const product: Product = {id, ...body};
        console.log(product);
        this._products.push(product);
        return product;
    }

    update(id: string, body: Partial<CreateProduct>): Product {
        const index = this._products.findIndex(product => product.id === id);
        if(index !== -1) {
            this._products[index] = {...this._products[index], ...body};
            return this._products[index];
        }
        throw new Error('Update operation failed');
    }

    replace(id: string, body: CreateProduct): Product {
        const index = this._products.findIndex(product => product.id === id);
        if(index !== -1) {
            this._products[index] = {id, ...body};
            return this._products[index];
        }
        throw new Error('Replace operation failed');
    }

    delete(id: string): boolean {
        const index = this._products.findIndex(product => product.id === id);
        if (index !== -1) {
            this._products.splice(index, 1);
            return true;
        }
        return false;
    }    
}
