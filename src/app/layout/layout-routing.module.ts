import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ProductsComponent } from '../products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { BusinessTypeComponent } from './business-type/business-type.component';
import { UserComponent, ListUserComponent, DetailUserComponent, EditUserComponent } from './user';
import { SellerComponent, ListSellerComponent, DetailSellerComponent, EditSellerComponent } from './seller';

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
            { path: 'user', component: UserComponent,
              children: [
                { path: '', component: ListUserComponent },
                { path: ':id', component: DetailUserComponent,
                  children: [
                    { path: '', redirectTo: 'edit' },
                    { path: 'edit', component: EditUserComponent }
                  ]
                }
              ]
            },
            { path: 'shipping-address', component: ShippingAddressComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'business-type', component: BusinessTypeComponent },
            { path: 'seller', component: SellerComponent,
              children: [
                { path: '', component: ListSellerComponent },
                { path: ':id', component: DetailSellerComponent,
                  children: [
                    { path: '', redirectTo: 'edit' },
                    { path: 'edit', component: EditSellerComponent }
                  ]
                }
              ]
            },
            { path: 'profile', component: ProfileComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'business-type', component: BusinessTypeComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
