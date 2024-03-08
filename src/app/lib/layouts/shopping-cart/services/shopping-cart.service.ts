import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ProductsI } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  urlApi: string = environment.endPoint;
  productCart: ProductsI[] = [];
  quantityProduct: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  addProductCart(product: ProductsI): void {
    const existingProduct = this.productCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.productCart.push({ ...product, quantity: 1 });
    }

    this.quantityProduct.next(this.getQuantityProductInCart());
    this.totalPrice.next(this.getTotalPrice());
  }

  getQuantityProductInCart(): number {
    return this.productCart.reduce((acc, item) => acc + item.quantity, 0);

  }

  getTotalPrice(): number {
    return this.productCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  removeItemProductCart(product: ProductsI): void {
    this.productCart = this.productCart.filter(
      (item) => item.id !== product.id
    );
    this.quantityProduct.next(this.productCart.length);
    this.totalPrice.next(this.getTotalPrice());
  }

  removeProductCart(idProduct: number): void {
    const index = this.productCart.findIndex(
      (item) => item.id === idProduct
    );

    if (index !== -1) {
      if (this.productCart[index].quantity > 1) {
        this.productCart[index].quantity--;
      } else {
        this.productCart.splice(index, 1);
      }
    }
    this.quantityProduct.next(this.productCart.length);
    this.totalPrice.next(this.getTotalPrice());
  }
}
