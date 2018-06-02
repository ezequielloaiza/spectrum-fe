import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UserComponent } from './user/user.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ProductsComponent } from '../products/products.component';
import { CheckAccountComponent } from './user/check-account/check-account.component';
import { ProfileComponent } from './profile/profile.component';

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
            { path: 'profile', component: ProfileComponent }
        ]
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule { }
