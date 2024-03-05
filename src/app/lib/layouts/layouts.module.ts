import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from './shopping-cart/services/products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ProductsService]
})
export class LayoutsModule { }
