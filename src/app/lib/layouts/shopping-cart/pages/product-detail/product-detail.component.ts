import { Component, OnInit } from '@angular/core';
import { ProductsI } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  
  product!: ProductsI;
  id: number = 0;

  protected onDestroy = new Subject<void>();

  constructor(public _shoppingcartservice: ShoppingCartService, 
    private _productService: ProductsService,
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.id = Number(params.get('id')!);
    //   console.log('id', this.id);
    // });
    // this.route.params.subscribe(params => {
    //   this.id = +params['id']; // Obtener el ID del parámetro 'id' de la URL
    //   console.log('Product ID:', this.id);
    // });

    this.id = Number(this.route.snapshot.paramMap.get('id'))!;
    console.log('id', this.id);
    // this.id = this.route.snapshot.params['id'];
    this.getProductById(this.id)

    console.log('URL', this.route.snapshot.url);
    
    
    
  }

   /**
 * OnDestroy
 */
   ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  getProductById(id: number) {
    this._productService.getProductById(id)
    .pipe(takeUntil(this.onDestroy))
    .subscribe({
      next: (res) => {
        this.product = res;
        console.log('Product', this.product);
        
      },
      error: (err) => {
        console.log('Error', err);
      },
    })
  }
}
