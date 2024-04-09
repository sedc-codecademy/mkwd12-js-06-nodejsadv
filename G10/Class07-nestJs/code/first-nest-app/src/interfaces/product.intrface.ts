export interface Product {
    id: string;
    name: string;
    description: string;
    stock: number;
    price: number
}

export interface CreateProduct {
    name: string;
    description: string;
    stock: number;
    price: number
}