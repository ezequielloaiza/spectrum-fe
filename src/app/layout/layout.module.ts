import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './user/user.component';
import { UserModalComponent } from './user/modals/user-modal/user-modal.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PageHeaderModule } from './../shared';
import { ShippingAddressModalComponent } from './shipping-address/modals/shipping-address-modal/shipping-address-modal.component';
import { BusinessTypeService } from '../shared/services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertifyService } from '../shared/services/alertify/alertify.service';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        UserComponent,
        UserModalComponent,
        ShippingAddressComponent,
        ShippingAddressModalComponent
    ],
    providers: [BusinessTypeService, AlertifyService],
    entryComponents: [ShippingAddressModalComponent, UserModalComponent]
})
export class LayoutModule {}
