import { Component } from '@angular/core';
import { QuantityCounterComponent } from '../../components/quantity-counter/quantity-counter.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductsI } from '../../interfaces/products.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-cart',
  standalone: true,
  imports: [QuantityCounterComponent, CommonModule],
  templateUrl: './modal-cart.component.html',
  styleUrl: './modal-cart.component.css'
})
export class ModalCartComponent {

  cartProducts: ProductsI[] = [];
  totalProducts: number = 0;
  totalItemsProducts: number = 0;
  protected onDestroy = new Subject<void>();

  constructor(private _shoppingcartservice: ShoppingCartService, private router: Router) { }

  /**
   * On Init
   */
  ngOnInit() {
    this.cartProducts = this._shoppingcartservice.productCart;
    this.getTotalProducs();
    this.getTotalItems();
  }

  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  /**
   * Retornaa para ver todos los productos
   */
  return() {
    this.router.navigateByUrl('/layouts/list');
  }

  /**
   * Remueve productos
   * @param product
   */
  removeProduct(product: ProductsI) {
    this._shoppingcartservice.removeProductCart(product.id);
    this.cartProducts = this._shoppingcartservice.productCart;
  }

  /**
   * Retorna total de items
   */
  getTotalItems() {
    this._shoppingcartservice.quantityProduct
      .pipe(takeUntil(this.onDestroy))
      .subscribe((totalItems) => {
        this.totalItemsProducts = totalItems;
      });
  }

  /**
 * Retorna total a pagar
 */
  getTotalProducs() {
    this._shoppingcartservice.totalPrice
      .pipe(takeUntil(this.onDestroy))
      .subscribe((total) => {
        this.totalProducts = total;
      });
  }

  /**
   * 
   * @param event 
   */
  setQuantityOutput(event: boolean, item: ProductsI) {
    event
      ? this._shoppingcartservice.addProductCart(item)
      : this._shoppingcartservice.removeItemProductCart(item)
  }

}
