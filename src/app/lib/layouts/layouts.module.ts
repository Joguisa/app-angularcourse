import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataTableComponent } from './shopping-cart/data-table/data-table.component';


@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,
  ],
})
export class LayoutsModule { }
