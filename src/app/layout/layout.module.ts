import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { UserModalComponent } from './user/modals/user-modal/user-modal.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PageHeaderModule } from './../shared';
import { ShippingAddressModalComponent } from './shipping-address/modals/shipping-address-modal/shipping-address-modal.component';
import { BusinessTypeService, GoogleService } from '../shared/services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertifyService } from '../shared/services/alertify/alertify.service';
import { HeaderModule } from '../shared/modules/header/header.module';
import { HeaderComponent } from '../shared/modules/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule,
        HeaderModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        ShippingAddressComponent,
        ShippingAddressModalComponent,
        UserComponent,
        UserModalComponent,
    ],
    entryComponents: [ShippingAddressModalComponent, UserModalComponent],
    providers: [
      BusinessTypeService,
      AlertifyService,
      GoogleService
    ]
})
export class LayoutModule {}
