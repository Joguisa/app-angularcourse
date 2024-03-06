import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductsI } from '../../interfaces/products.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: ProductsI;
  @Output() viewDetailsClick = new EventEmitter<void>(); // Cambié el tipo de EventEmitter a void

  onViewDetailsClick(): void {
    console.log('Product', this.product.id);
    
    this.viewDetailsClick.emit();
  }
  
}
