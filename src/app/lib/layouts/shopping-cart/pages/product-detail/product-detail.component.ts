import { Component, OnInit } from '@angular/core';
import { ProductsI } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, LoadingComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  isLoading: boolean = false;
  product!: ProductsI;
  id: number = 0;

  protected onDestroy = new Subject<void>();

  constructor(
    public _shoppingcartservice: ShoppingCartService,
    private _productService: ProductsService,
    private route: ActivatedRoute,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductById(this.id);

  }

  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  /**
   *
   * @param id
   */
  getProductById(id: number) {
    this.isLoading = true;
    this._productService
      .getProductById(id)
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (res) => {
          if (res) {
            this.product = res;
            this.isLoading = false;
          }
        },
        error: (err) => {
          this._toastr.error('Error', err);
          this.isLoading = false;
        },
      });
  }

  addToCart(product: ProductsI) {
    // this._shoppingcartservice.addToCart(product);
  }
}
