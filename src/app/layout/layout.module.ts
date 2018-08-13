import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PageHeaderModule, BreadcrumbModule, RoleGuard } from './../shared';
import { ShippingAddressModalComponent } from './shipping-address/modals/shipping-address-modal/shipping-address-modal.component';
import { BusinessTypeService, GoogleService, AuthorizationService} from '../shared/services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertifyService } from '../shared/services/alertify/alertify.service';
import { HeaderModule } from '../shared/modules/header/header.module';
import { HeaderComponent } from '../shared/modules/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierModalComponent } from './suppliers/modals/supplier-modal/supplier-modal.component';
import { CategoryComponent } from './category/category.component';
import { BusinessTypeComponent } from './business-type/business-type.component';
import { BusinessTypeModalComponent } from './business-type/modals/business-type-modal/business-type-modal.component';
import { CategoryModalComponent } from './category/modals/category-modal/category-modal.component';
import { UserComponent, UserModalComponent, ListUserComponent, DetailUserComponent, EditUserComponent, EditCompanyComponent } from './user';
import { SellerComponent, ListSellerComponent, SellerModalComponent, DetailSellerComponent, EditSellerComponent } from './seller';
import { MembershipService} from '../shared/services/membership/membership.service';
import { ListOrderComponent } from './client/list-order/list-order.component';
import { ClientComponent } from './client/client.component';
import { DetailsOrderComponent } from './client/details-order/details-order.component';
import { ClientSellerComponent } from './seller/detail-seller/client-seller/client-seller.component';
import { ModalSellerComponent } from './seller/detail-seller/modal-seller/modal-seller.component';
import { BreadcrumbService } from '../shared/modules/breadcrumb/breadcrumb.service';
import { UserResolver } from './user/user.resolver';
import { RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { SellerResolver } from './seller/seller.resolver';
import { ListUserModalComponent } from './user/modals/list-user-modal/list-user-modal.component';
import { ListSupplierModalComponent } from './user/modals/list-supplier-modal/list-supplier-modal.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { WarrantyModalComponent } from './warranty/modals/warranty-modal/warranty-modal.component';
import { ManageCustomerOrdersComponent } from './manage-customer-orders/manage-customer-orders.component';
import { ListOrderClientComponent } from './manage-customer-orders/list-order-client/list-order-client.component';
import { DetailsOrderClientComponent } from './manage-customer-orders/details-order-client/details-order-client.component';
import { ModalsStatusComponent } from './manage-customer-orders/modals-status/modals-status.component';
import { ModalsConfirmationComponent } from './manage-customer-orders/modals-confirmation/modals-confirmation.component';

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
        InternationalPhoneModule,
        BreadcrumbModule
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
        EditCompanyComponent,
        SuppliersComponent,
        SupplierModalComponent,
        ListOrderComponent,
        ClientComponent,
        DetailsOrderComponent,
        ClientSellerComponent,
        ModalSellerComponent,
        ListUserModalComponent,
        ListSupplierModalComponent,
        WarrantyComponent,
        WarrantyModalComponent,
        ManageCustomerOrdersComponent,
        ListOrderClientComponent,
        DetailsOrderClientComponent,
        ModalsStatusComponent,
        ModalsConfirmationComponent
    ],
    entryComponents: [
      ShippingAddressModalComponent,
      UserModalComponent,
      BusinessTypeModalComponent,
      CategoryModalComponent,
      SupplierModalComponent,
      SellerModalComponent,
      ModalSellerComponent,
      ListUserModalComponent,
      ListSupplierModalComponent,
      WarrantyModalComponent,
      ModalsStatusComponent,
      ModalsConfirmationComponent
    ],
    providers: [
      BusinessTypeService,
      AlertifyService,
      GoogleService,
      BreadcrumbService,
      UserResolver,
      SellerResolver,
      RoleGuard,
      AuthorizationService
    ]
})
export class LayoutModule {}
