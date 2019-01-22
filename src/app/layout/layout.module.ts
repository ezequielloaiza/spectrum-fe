import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PageHeaderModule, BreadcrumbModule, RoleGuard } from '../shared';
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
import { ListBasketComponent } from './basket/client/list/list-basket/list-basket.component';
import { ListBasketClientComponent } from './basket/admin-seller/list/list-basket-client/list-basket-client.component';
import { DetailsBasketClientComponent } from './basket/admin-seller/details/details-basket-client/details-basket-client.component';
import { EditSupplierComponent } from './user/detail-user/edit-supplier/edit-supplier.component';
import { SupplierUserModalComponent } from './user/modals/supplier-user-modal/supplier-user-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SupplierEuropaComponent } from './details-order-supplier/supplier-europa/supplier-europa.component';
import { SupplierMarkennovyComponent } from './details-order-supplier/supplier-markennovy/supplier-markennovy.component';
import { SupplierLenticonComponent } from './details-order-supplier/supplier-lenticon/supplier-lenticon.component';
import { SupplierEuclidComponent } from './details-order-supplier/supplier-euclid/supplier-euclid.component';
import { SupplierMagicLookComponent } from './details-order-supplier/supplier-magic-look/supplier-magic-look.component';
import { SupplierBlueLightComponent } from './details-order-supplier/supplier-blue-light/supplier-blue-light.component';
import { DetailProductModalComponent } from './basket/modals/detail-product/detail-product';
import { SummaryProductsComponent } from './basket/modals/summary-products/summary-products.component';
// import { DetailProductModalComponent } from './basket/client/modals/detail-product/detail-product';
import { ModalsChangeStatusComponent } from './warranty/modals/modals-change-status/modals-change-status.component';
import { GenerateInvoiceComponent } from './manage-customer-orders/generate-invoice/generate-invoice.component';
import { FileUploadModule } from 'ng2-file-upload';
import { MagicLookComponent } from './edit-order/magic-look/magic-look.component';
import { BlueLightComponent } from './edit-order/blue-light/blue-light.component';
import { EuclidComponent } from './edit-order/euclid/euclid.component';
import { MarkennovyComponent } from './edit-order/markennovy/markennovy.component';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotificationBalanceOrderComponent } from './notification/notification-balance-order/notification-balance-order.component';
import { InvoiceClientService } from '../shared/services/invoiceClient/invoice-client.service';
import { DetailMagicLookComponent } from './basket/modals/detail-product/detail-magic-look/detail-magic-look.component';
import { DetailMarkennovyComponent } from './basket/modals/detail-product/detail-markennovy/detail-markennovy.component';
import { DetailBlueLightComponent } from './basket/modals/detail-product/detail-blue-light/detail-blue-light.component';
import { ManagePaymentsComponent } from './manage-payments/manage-payments.component';
import { PaymentsMadeComponent } from './manage-payments/payments-made/payments-made.component';
import { AddPaymentModalComponent } from './manage-payments/payments-made/modals/add-payment-modal/add-payment-modal.component';
import { DetailEuclidComponent } from './basket/modals/detail-product/detail-euclid/detail-euclid.component';
import { DetailEuropaComponent } from './basket/modals/detail-product/detail-europa/detail-europa.component';
import { ChangeStatusComponent } from './manage-payments/payments-made/modals/change-status/change-status.component';
import { EuropaComponent } from './edit-order/europa/europa.component';
import { DetailSalineFluoComponent } from './basket/modals/detail-product/detail-saline-fluo/detail-saline-fluo.component';
import { SalineFluoComponent } from './edit-order/saline-fluo/saline-fluo.component';
import { DetailLenticonComponent } from './basket/modals/detail-product/detail-lenticon/detail-lenticon.component';
import { LenticonComponent } from './edit-order/lenticon/lenticon.component';
import { ModalsInvoiceComponent } from './manage-customer-orders/modals-invoice/modals-invoice.component';
import { ManageCommissionComponent } from './manage-commission/manage-commission.component';
import { ChangeStatusCommissionComponent } from './manage-commission/change-status-commission/change-status-commission.component';

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
        BreadcrumbModule,
        NgSelectModule,
        FileUploadModule,
        NgxSpinnerModule
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
        ModalsConfirmationComponent,
        ListBasketComponent,
        ListBasketClientComponent,
        DetailsBasketClientComponent,
        EditSupplierComponent,
        SupplierUserModalComponent,
        SupplierEuropaComponent,
        SupplierMarkennovyComponent,
        SupplierLenticonComponent,
        SupplierEuclidComponent,
        SupplierMagicLookComponent,
        SupplierBlueLightComponent,
        DetailProductModalComponent,
        SummaryProductsComponent,
        ModalsChangeStatusComponent,
        MagicLookComponent,
        GenerateInvoiceComponent,
        BlueLightComponent,
        EuclidComponent,
        MarkennovyComponent,
        GenerateInvoiceComponent,
        ManageInvoiceComponent,
        NotificationBalanceOrderComponent,
        DetailMagicLookComponent,
        DetailMarkennovyComponent,
        DetailBlueLightComponent,
        ManagePaymentsComponent,
        PaymentsMadeComponent,
        AddPaymentModalComponent,
        DetailEuclidComponent,
        DetailEuropaComponent,
        EuropaComponent,
        ChangeStatusComponent,
        DetailSalineFluoComponent,
        SalineFluoComponent,
        DetailLenticonComponent,
        LenticonComponent,
        ModalsInvoiceComponent,
        ManageCommissionComponent,
        ChangeStatusCommissionComponent
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
      ModalsConfirmationComponent,
      SupplierUserModalComponent,
      DetailProductModalComponent,
      SummaryProductsComponent,
      ModalsChangeStatusComponent,
      MagicLookComponent,
      GenerateInvoiceComponent,
      BlueLightComponent,
      EuclidComponent,
      MarkennovyComponent,
      NotificationBalanceOrderComponent,
      DetailMagicLookComponent,
      DetailMarkennovyComponent,
      DetailBlueLightComponent,
      AddPaymentModalComponent,
      DetailEuclidComponent,
      DetailEuropaComponent,
      EuropaComponent,
      ChangeStatusComponent,
      DetailSalineFluoComponent,
      SalineFluoComponent,
      DetailLenticonComponent,
      LenticonComponent,
      ModalsInvoiceComponent,
      ChangeStatusCommissionComponent
    ],
    providers: [
      BusinessTypeService,
      AlertifyService,
      GoogleService,
      BreadcrumbService,
      UserResolver,
      SellerResolver,
      RoleGuard,
      AuthorizationService,
      InvoiceClientService
    ]
})
export class LayoutModule {}
