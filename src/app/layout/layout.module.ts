import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PageHeaderModule } from './../shared';
import { ShippingAddressModalComponent } from './shipping-address/modals/shipping-address-modal/shipping-address-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from '../shared/services/alertify/alertify.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        NgbModule.forRoot(),
        PageHeaderModule,
        ReactiveFormsModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ShippingAddressComponent, ShippingAddressModalComponent, ProductsComponent],
    entryComponents: [ShippingAddressModalComponent],
    providers: [AlertifyService]
})
export class LayoutModule {}
