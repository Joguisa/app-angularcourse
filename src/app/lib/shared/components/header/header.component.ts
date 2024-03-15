import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../../layouts/shopping-cart/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartService } from '../../../layouts/shopping-cart/services/shopping-cart.service';
import { AuthService } from '../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ProductsService]
})
export class HeaderComponent implements OnInit, OnDestroy{

  productsInCart: number = 0;
  protected onDestroy = new Subject<void>();

  constructor(
    private router: Router,
    public _authService: AuthService,
    public _shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this._shoppingCartService.quantityProduct
      .pipe(takeUntil(this.onDestroy))
      .subscribe(quantity => {
        this.productsInCart = quantity;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  /**
   * Cerrar Sesion
   */
  close() {
    this._authService.logout();
  }

  /**
   * Ver el carrito
   */
  goToShoppingCart() {
    this.router.navigateByUrl('/layouts/shopping-cart');
  }

}
