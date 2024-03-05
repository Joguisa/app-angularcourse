import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ProductsI, ShoppCartI } from '../interfaces/products.interface';

@Component({
  selector: 'app-data-table',
  // standalone: true,
  // imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnInit {
  
  listProducts: ProductsI[] = [];
  productCart: ShoppCartI[] = [];

  disabledButton: boolean = false;

  constructor(public _shoppingcartservice: ShoppingCartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.listProducts = this._shoppingcartservice.getProducto();
  }

  decreaseQuantity(product: ProductsI) {
    if (product.quantity > 1) product.quantity--;
  }

  increaseQuantity(product: ProductsI) {
    //if (product.quantity == product.stock) this.disabledButton = true;
    product.quantity++;
  }

  addCart(product: ProductsI) {
    const existingProduct = this.productCart.find(
      (item) =>
        item.code.toLocaleLowerCase() === product.code.toLocaleLowerCase()
    );
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      existingProduct.total += product.price * product.quantity;
    } else {
      const total = product.price * product.quantity;
      this.productCart.push({
        code: product.code,
        name: product.name,
        unitPrice: product.price,
        quantity: product.quantity,
        total: total,
      });
    }

    this.calcularTotales();
  }

  calcularTotales() {
    this._shoppingcartservice.calcularTotales(this.productCart);
  }

  deleteProduct(product: ProductsI) {
    this._shoppingcartservice.deleteProduct(product.code);
    this.getProducts();
  }

  deleteProductCart(product: ShoppCartI) {
    const index = this.productCart.findIndex(
      (item) => item.code === product.code
    );
    if (index !== -1) {
      this.productCart.splice(index, 1);
    }
    this.calcularTotales();
  }
}
