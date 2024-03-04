import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule,
    
  ],
  providers: [CurrencyPipe],
})
export class LayoutsModule { }
