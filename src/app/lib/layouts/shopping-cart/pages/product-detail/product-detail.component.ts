import { Component, OnInit } from '@angular/core';
import { ProductsI } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  

  product!: ProductsI;

  constructor(public _shoppingcartservice: ShoppingCartService, private _productService: ProductsService) {}


  ngOnInit(): void {
    this._productService.getProductById('1')
  }

  

}
