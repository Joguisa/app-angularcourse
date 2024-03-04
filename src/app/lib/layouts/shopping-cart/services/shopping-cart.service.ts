import { Injectable } from '@angular/core';
import { ProductsI, ShoppCartI } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}

  total: number = 0;
  listProducts: ProductsI[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 10.99,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 19.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 5.99,
      quantity: 1,
    },
    {
      id: 4,
      name: 'Producto 4',
      description: 'Descripción del producto 4',
      price: 15.99,
      quantity: 1,
    },
    {
      id: 5,
      name: 'Producto 5',
      description: 'Descripción del producto 5',
      price: 7.99,
      quantity: 1,
    },
  ];

  getProducto() {
    return this.listProducts.slice();
  }

  addProduct(product: ProductsI) {
    this.listProducts.unshift(product);
  }

  deleteProduct(index: number) {
    this.listProducts.splice(index, 1);
  }
}
