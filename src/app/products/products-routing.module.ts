import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductViewEuropaComponent } from './product-view-europa/product-view-europa.component';
import { ProductViewEuclidComponent } from './product-view-euclid/product-view-euclid.component';
import { ProductViewMagicComponent } from './product-view-magicLook/product-view-magic.component';
import { ProductViewBlueComponent } from './product-view-blue/product-view-blue.component';
import { RoleGuard } from '../shared';
import { ProductsListInternalComponent } from './products-lists-internal/products-lists-internal.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivateChild: [RoleGuard],
    children: [
        { path: '', component: ProductsListsComponent, data: { option: 'ProductsList' }  },
        { path: ':idSupplier/internal', component: ProductsListInternalComponent, data: { option: 'ProductsListInternal' }},
        { path: ':id/product-view', component: ProductViewComponent, data: { option: 'ProductsView' }},
        { path: ':id/product-view-europa', component: ProductViewEuropaComponent, data: { option: 'ProductsViewEuropa' }},
        { path: ':id/product-view-euclid', component: ProductViewEuclidComponent, data: { option: 'ProductsViewEuclid' }},
        { path: ':id/product-view-magic', component: ProductViewMagicComponent, data: { option: 'ProductsViewMagic' }},
        { path: ':id/product-view-blue', component: ProductViewBlueComponent, data: { option: 'ProductsViewBlue' }},
    ] , data: { option: 'ProductsList' }
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
