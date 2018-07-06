import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UserComponent } from './user/user.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ProductsComponent } from '../products/products.component';
import { CheckAccountComponent } from './user/check-account/check-account.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { BusinessTypeComponent } from './business-type/business-type.component';
import { ListOrderComponent } from './client/list-order/list-order.component';
import { ClientComponent } from './client/client.component';
import { DetailsOrderComponent } from './client/details-order/details-order.component';
import { ListOrderClientComponent } from './manage-customer-orders/list-order-client/list-order-client.component';
import {DetailsOrderClientComponent} from './manage-customer-orders/details-order-client/details-order-client.component';
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
            { path: 'user', component: UserComponent },
            { path: 'shipping-address', component: ShippingAddressComponent },
            { path: 'consult-account', component: CheckAccountComponent },
            { path: 'suppliers', component: SuppliersComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'business-type', component: BusinessTypeComponent },
            { path: 'order-list-client', component: ListOrderComponent,
             //runGuardsAndResolvers: 'always',
               /* children: [
                    { path: '', component: ListOrderComponent },
                    {
                        path: ':id', component: DetailsOrderComponent
                    }
                ]*/
            },
           {path:'details-order/:id/view',component: DetailsOrderComponent},
           {path:'order-list-client-byseller',component:ListOrderClientComponent},
           {path:'details-order-client/:id/view',component: DetailsOrderClientComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
