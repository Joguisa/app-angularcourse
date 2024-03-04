import { Injectable } from '@angular/core';
import { ProductsI, ShoppCartI } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}

  subtotal: number = 0;
  iva: number = 0;
  totalAmount: number = 0;

  listProducts: ProductsI[] = [
    {
      code: '001',
      name: 'Smartphone',
      description: 'High-end smartphone with advanced features',
      price: 799.99,
      quantity: 1,
    },
    {
      code: '002',
      name: 'Laptop',
      description: 'Thin and lightweight laptop with powerful performance',
      price: 1299.99,
      quantity: 1,
    },
    {
      code: '003',
      name: 'Headphones',
      description: 'Wireless headphones with noise-cancelling technology',
      price: 249.99,
      quantity: 1,
    },
    {
      code: '004',
      name: 'Smartwatch',
      description: 'Fitness tracker with heart rate monitoring and GPS',
      price: 199.99,
      quantity: 1,
    },
    {
      code: '005',
      name: 'Bluetooth Speaker',
      description:
        'Portable speaker with 360-degree sound and waterproof design',
      price: 99.99,
      quantity: 1,
    },
  ];

  getProducto() {
    return this.listProducts.slice();
  }

  addProduct(product: ProductsI) {
    this.listProducts.unshift(product);
  }

  deleteProduct(productCode: string) {
    const index = this.listProducts.findIndex(
      (item) => item.code === productCode
    );
    if (index !== -1) {
      this.listProducts.splice(index, 1);
    }
  }

  calcularTotales(productCart: ShoppCartI[]) {
    this.subtotal = +productCart
      .reduce((acc, curr) => acc + curr.total, 0)
      .toFixed(2);

    this.iva = +(this.subtotal * 0.12).toFixed(2);

    this.totalAmount = +(this.subtotal + this.iva).toFixed(2);
  }
}
