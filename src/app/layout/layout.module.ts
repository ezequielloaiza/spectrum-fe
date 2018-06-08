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
import { CheckAccountComponent, FilterStatusPipe } from './user/check-account/check-account.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import { CategoryComponent } from './category/category.component';
import { BusinessTypeComponent } from './business-type/business-type.component';
import { BusinessTypeModalComponent } from './business-type/modals/business-type-modal/business-type-modal.component';
import { CategoryModalComponent } from './category/modals/category-modal/category-modal.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule,
        HeaderModule,
        NgSelectModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        ShippingAddressComponent,
        ShippingAddressModalComponent,
        UserComponent,
        UserModalComponent,
        CheckAccountComponent,
        FilterStatusPipe,
        DetailUserComponent,
        NavComponent,
        CategoryComponent,
        BusinessTypeComponent,
        BusinessTypeModalComponent,
        CategoryModalComponent
    ],
    entryComponents: [ShippingAddressModalComponent, UserModalComponent,BusinessTypeModalComponent,CategoryModalComponent],
    providers: [
      BusinessTypeService,
      AlertifyService,
      GoogleService,
      NavService
    ]
})
export class LayoutModule {}
