import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ProductsComponent } from '../products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { BusinessTypeComponent } from './business-type/business-type.component';
import { ListOrderComponent } from './client/list-order/list-order.component';
import { ClientComponent } from './client/client.component';
import { DetailsOrderComponent } from './client/details-order/details-order.component';
import { UserComponent, ListUserComponent, DetailUserComponent, EditUserComponent, EditCompanyComponent} from './user';
import { SellerComponent, ListSellerComponent, DetailSellerComponent, EditSellerComponent } from './seller';
import { ClientSellerComponent } from './seller/detail-seller/client-seller/client-seller.component';
import { UserResolver } from './user/user.resolver';
import { SellerResolver } from './seller/seller.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'forms', loadChildren: './form/form.module#FormModule' },
      { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
      { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
      { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
      { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
      { path: 'shipping-address', component: ShippingAddressComponent },
      //{ path: 'consult-account', component: CheckAccountComponent },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'business-type', component: BusinessTypeComponent },
      { path: 'order-list-client', component: ListOrderComponent },
      { path: 'details-order/:id/view', component: DetailsOrderComponent },
      {
        path: 'user', component: UserComponent,
        resolve: {
          users: UserResolver
        },
        runGuardsAndResolvers: 'always',
        children: [
          { path: '', component: ListUserComponent },
          {
            path: ':id', component: DetailUserComponent,
            resolve: {
              users: UserResolver
            },
            children: [
              { path: '', redirectTo: 'edit', pathMatch: 'full' },
              { path: 'edit', component: EditUserComponent },
              { path: 'edit-company', component: EditCompanyComponent }
            ]
          }
        ]
      },
      {
        path: 'seller', component: SellerComponent,
        resolve: {
          sellers: SellerResolver
        },
        runGuardsAndResolvers: 'always',
        children: [
          { path: '', component: ListSellerComponent },
          {
            path: ':id', component: DetailSellerComponent,
            resolve: {
              sellers: SellerResolver
            },
            children: [
              { path: '', redirectTo: 'edit', pathMatch: 'full' },
              { path: 'edit', component: EditSellerComponent },
              { path: 'client-seller', component: ClientSellerComponent }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
