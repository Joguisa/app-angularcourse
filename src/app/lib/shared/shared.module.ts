import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../layouts/shopping-cart/services/products.service';

// material 

// const modules = [
//   CommonModule,
//   ReactiveFormsModule,
//   FormsModule,
//   HttpClientModule,
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductsService]
})
export class SharedModule { }
