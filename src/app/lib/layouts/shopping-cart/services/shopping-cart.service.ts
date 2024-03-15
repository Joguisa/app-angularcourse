import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsI } from '../interfaces/products.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  urlApi: string = environment.endPoint;
  productCart: ProductsI[] = [];

  totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  quantityProduct: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private _toastr: ToastrService) {}

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
    console.log('quantityProduct', this.quantityProduct);

    this.totalPrice.next(this.getTotalPrice());
    this._toastr.success('Product added to cart', 'Success');
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
