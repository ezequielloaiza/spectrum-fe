import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RoleGuard } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivateChild: [RoleGuard],
    children: [
        { path: '', component: ProductsListsComponent, data: { option: 'ProductsList' }  },
        { path: ':id/product-view', component: ProductViewComponent, data: { option: 'ProductsView' }},
        { path: ':id/product-details/:type', component: ProductDetailComponent, data: { option: 'ProductsDetails' }},
    ] , data: { option: 'ProductsList' }
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
