import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../../layouts/shopping-cart/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartService } from '../../../layouts/shopping-cart/services/shopping-cart.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ProductsService]
})
export class HeaderComponent implements OnInit, OnDestroy{
  productsInCart: number = 0;
  protected onDestroy = new Subject<void>();

  constructor(private router: Router,
    private _shoppingcartservice: ShoppingCartService,) { }

  /**
   * OnInit
   */
  ngOnInit() {
    this._shoppingcartservice
      .quantityProduct
      .pipe(takeUntil(this.onDestroy))
      .subscribe(quantity => {
        this.productsInCart = quantity;
      })
  }

  /**
 * OnDestroy
 */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  /**
   * Redirije al Login
   */
  goToLogin() {
    this.router.navigateByUrl('/auth/sign-in');
  }

  /**
 * Saber si el usuario esta logueado
 * @returns 
 */
  getUserIsLogin() {
    return localStorage.getItem('token');
  }

  /**
   * Cerrar Sesion
   */
  close() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/sign-in');
  }

  /**
   * Ver el carrito
   */
  goToShoppingCart() {
    this.router.navigateByUrl('/layouts/shopping-cart');
  }

}
