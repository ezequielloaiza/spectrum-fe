import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PageHeaderModule } from './../shared';
import { ShippingAddressModalComponent } from './shipping-address/modals/shipping-address-modal/shipping-address-modal.component';
import { BusinessTypeService, GoogleService} from '../shared/services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertifyService } from '../shared/services/alertify/alertify.service';
import { HeaderModule } from '../shared/modules/header/header.module';
import { HeaderComponent } from '../shared/modules/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { CategoryComponent } from './category/category.component';
import { BusinessTypeComponent } from './business-type/business-type.component';
import { BusinessTypeModalComponent } from './business-type/modals/business-type-modal/business-type-modal.component';
import { CategoryModalComponent } from './category/modals/category-modal/category-modal.component';
import { UserComponent, UserModalComponent, ListUserComponent, DetailUserComponent, EditUserComponent, EditCompanyComponent } from './user';
import { SellerComponent, ListSellerComponent, SellerModalComponent, DetailSellerComponent, EditSellerComponent } from './seller';
import { MembershipService} from '../shared/services/membership/membership.service';


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
        InternationalPhoneModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        ShippingAddressComponent,
        ShippingAddressModalComponent,
        UserComponent,
        UserModalComponent,
        ProfileComponent,
        CategoryComponent,
        BusinessTypeComponent,
        BusinessTypeModalComponent,
        CategoryModalComponent,
        ListUserComponent,
        DetailUserComponent,
        EditUserComponent,
        SellerComponent,
        ListSellerComponent,
        SellerModalComponent,
        DetailSellerComponent,
        EditSellerComponent,
        EditCompanyComponent
    ],
    entryComponents: [ShippingAddressModalComponent, UserModalComponent, BusinessTypeModalComponent, CategoryModalComponent],
    providers: [
      BusinessTypeService,
      AlertifyService,
      GoogleService
    ]
})
export class LayoutModule {}
