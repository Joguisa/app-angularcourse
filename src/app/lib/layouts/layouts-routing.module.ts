import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './shopping-cart/pages/data-table/data-table.component';
import { ProductDetailComponent } from './shopping-cart/pages/product-detail/product-detail.component';
import { ModalCartComponent } from './shopping-cart/pages/modal-cart/modal-cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: DataTableComponent },
      { path: 'product-details/:id', component: ProductDetailComponent },
      { path: 'shopping-cart', component: ModalCartComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
