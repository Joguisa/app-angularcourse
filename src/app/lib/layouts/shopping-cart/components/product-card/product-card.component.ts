import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductsI } from '../../interfaces/products.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule, LoadingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  isLoading: boolean = false;
  constructor(private _shoppingcartservice: ShoppingCartService) {}

  @Input() product!: ProductsI;
  @Output() viewDetailsClick = new EventEmitter<void>();

  onViewDetailsClick(): void {
    this.viewDetailsClick.emit();
  }

  addToCart() {
    this._shoppingcartservice.addProductCart(this.product);
  }
  
}
