import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductsI, ShoppCartI } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [ProductCardComponent, LoadingComponent, HeaderComponent, FooterComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnInit {
  
  isLoading: boolean = true;
  listProducts: ProductsI[] = [];
  productCart: ShoppCartI[] = [];

  disabledButton: boolean = false;
  protected onDestroy = new Subject<void>();

  constructor(public _shoppingcartservice: ShoppingCartService, private _productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  getProducts() {
    this._productService.getProducts()
    .pipe(takeUntil(this.onDestroy))
    .subscribe({
      next: (res) => {
        this.isLoading = false;
        this.listProducts = res;
        console.log('Products', this.listProducts);
      },
      error: (err) => {
        console.log('Error', err);
      },
    
    })
  }
  
}
