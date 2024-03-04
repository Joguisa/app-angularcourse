import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ProductsI, ShoppCartI } from '../interfaces/products.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  providers: [CurrencyPipe],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnInit {
  subtotal: number = 0;
  iva: number = 0;
  totalAmount: number = 0;

  listProducts: ProductsI[] = [];
  productCart: ShoppCartI[] = [];

  constructor(private _shoppingcartservice: ShoppingCartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.listProducts = this._shoppingcartservice.getProducto();
    console.log(this.listProducts);
  }

  decreaseQuantity(product: ProductsI) {
    if (product.quantity > 1) product.quantity--;
  }

  increaseQuantity(product: ProductsI) {
    product.quantity++;
  }

  addCart(product: ProductsI) {
    const index = this.productCart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.productCart[index].quantity += product.quantity;
      this.productCart[index].total += product.price * product.quantity;
    } else {
      const total = product.price * product.quantity;
      this.productCart.push({
        id: product.id,
        name: product.name,
        unitPrice: product.price,
        quantity: product.quantity,
        total: total,
      });
    }

    this.calcularTotales();
  }

  calcularTotales() {
    this.subtotal = +(this.productCart.reduce((acc, curr) => acc + curr.total, 0).toFixed(2));
  
    this.iva = +(this.subtotal * 0.12).toFixed(2);
  
    this.totalAmount = +(this.subtotal + this.iva).toFixed(2);
  }
  
}
