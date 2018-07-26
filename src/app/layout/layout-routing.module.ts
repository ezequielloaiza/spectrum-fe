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
import { UserComponent, ListUserComponent, DetailUserComponent, EditUserComponent, EditCompanyComponent } from './user';
import { SellerComponent, ListSellerComponent, DetailSellerComponent, EditSellerComponent } from './seller';
import { ClientSellerComponent } from './seller/detail-seller/client-seller/client-seller.component';
import { UserResolver } from './user/user.resolver';
import { SellerResolver } from './seller/seller.resolver';
import { OrderResolver } from './client/order.resolver';
import { ListOrderClientComponent } from './manage-customer-orders/list-order-client/list-order-client.component';
import { DetailsOrderClientComponent } from './manage-customer-orders/details-order-client/details-order-client.component';
import { RoleGuard } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [RoleGuard],
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { option: 'Dashboard' } },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'forms', loadChildren: './form/form.module#FormModule' },
      { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
      { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
      { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
      { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
      { path: 'shipping-address', component: ShippingAddressComponent, data: { option: 'ShippingAddress' } },
      //{ path: 'consult-account', component: CheckAccountComponent },
      { path: 'suppliers', component: SuppliersComponent, runGuardsAndResolvers: 'always', data: { option: 'Suppliers' } },
      {
        path: 'profile', component: ProfileComponent,
        data: { option: 'Profile' }
      },
      {
        path: 'category', component: CategoryComponent,
        data: { option: 'Category' }
      },
      {
        path: 'business-type', component: BusinessTypeComponent,
        data: { option: 'BusinessType' }
      },
      {
        path: 'order-list-client', component: ListOrderComponent,
        data: { option: 'OrdersList' },
        resolve: {
          orders: OrderResolver
        },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'details-order/:id/view', component: DetailsOrderComponent,
        data: { option: 'OrdersDetail' },
        resolve: {
          orders: OrderResolver
        }
      },
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
        ],
        data: { option: 'Users' }
      },
      {
        path: 'seller', component: SellerComponent,
        resolve: {
          sellers: SellerResolver
        },
        runGuardsAndResolvers: 'always',
        children: [
          { path: '', component: ListSellerComponent, data: { option: 'Sellers' } },
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
        ],
        data: { option: 'Sellers' }
      },
      { path: 'order-list-client-byseller', component: ListOrderClientComponent },
      { path: 'details-order-client/:id/view', component: DetailsOrderClientComponent }
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
