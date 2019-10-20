import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ProductsComponent } from '../products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { BusinessTypeComponent } from './business-type/business-type.component';
import { ListOrderComponent } from './client/list-order/list-order.component';
import { ClientComponent } from './client/client.component';
import { DetailsOrderComponent } from './client/details-order/details-order.component';
import { UserComponent, ListUserComponent, DetailUserComponent, EditUserComponent, EditCompanyComponent } from './user';
import { SellerComponent, ListSellerComponent, DetailSellerComponent, EditSellerComponent } from './seller';
import { ClientSellerComponent } from './seller/detail-seller/client-seller/client-seller.component';
import { UserResolver } from './user/user.resolver';
import { SellerResolver } from './seller/seller.resolver';
import { ListOrderClientComponent } from './manage-customer-orders/list-order-client/list-order-client.component';
import { DetailsOrderClientComponent } from './manage-customer-orders/details-order-client/details-order-client.component';
import { RoleGuard } from '../shared';
import { WarrantyComponent } from './warranty/warranty.component';
import { ListBasketComponent } from './basket/client/list/list-basket/list-basket.component';
import { ListBasketClientComponent } from './basket/admin-seller/list/list-basket-client/list-basket-client.component';
import { DetailsBasketClientComponent } from './basket/admin-seller/details/details-basket-client/details-basket-client.component';
import { EditSupplierComponent } from './user/detail-user/edit-supplier/edit-supplier.component';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';
import { ManagePaymentsComponent } from './manage-payments/manage-payments.component';
import { PaymentsMadeComponent } from './manage-payments/payments-made/payments-made.component';
import { ManageCommissionComponent } from './manage-commission/manage-commission.component';
import { EntrustingCompanyComponent } from './entrusting-company/entrusting-company.component';
import { ProtocolComponent } from './protocol/protocol.component';
import { ProtocolProformaComponent } from './protocol/protocol-proforma/protocol-proforma.component';
import { ProtocolClientComponent } from './protocol-client/protocol-client.component';
import { ShippingProtocolComponent } from './user/detail-user/shipping-protocol/shipping-protocol.component';
import { InvoiceClientQBOComponent } from './invoice-client-qbo/invoice-client-qbo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [RoleGuard],
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { option: 'Dashboard' } },
      { path: 'shipping-address', component: ShippingAddressComponent, data: { option: 'ShippingAddress' } },
      // { path: 'consult-account', component: CheckAccountComponent },
      { path: 'suppliers', component: SuppliersComponent, runGuardsAndResolvers: 'always', data: { option: 'Suppliers' } },
      {
        path: 'profile', component: ProfileComponent,
        data: { option: 'Profile' }
      },
      {
        path: 'category', component: CategoryComponent,
        data: { option: 'Category' }
      },
      {
        path: 'business-type', component: BusinessTypeComponent,
        data: { option: 'BusinessType' }
      },
      {
        path: 'order-list-client', component: ListOrderComponent,
        data: { option: 'OrdersList' }
      },
      {
        path: 'details-order/:id/view', component: DetailsOrderComponent,
        data: { option: 'OrdersDetail' },
      },
      {
        path: 'warranty', component: WarrantyComponent,
        data: { option: 'Warranty' }
      },
      {
        path: 'invoice', component: ManageInvoiceComponent,
        data: { option: 'Invoice' }
      },
      {
        path: 'client-invoice', component: InvoiceClientQBOComponent,
        data: { option: 'ClientInvoice' }
      },
      {
        path: 'commission', component: ManageCommissionComponent,
        data: { option: 'Commission' }
      },
      {
        path: 'entrusting-company', component: EntrustingCompanyComponent,
        data: { option: 'EntrustingCompany' }
      },
      {
        path: 'payments', component: ManagePaymentsComponent,
        data: { option: 'Payments' },
      },
      {
        path: 'payments/:idInvoice/paymentsMade', component: PaymentsMadeComponent,
        data: { option: 'PaymentsMade' }
      },
      {
        path: 'user', component: UserComponent,
        resolve: {
          users: UserResolver
        },
        runGuardsAndResolvers: 'always',
        children: [
          { path: '', component: ListUserComponent,
          data: { option: 'Users' }
          },
          {
            path: ':id', component: DetailUserComponent,
            data: { option: 'ViewUser' },
            resolve: {
              users: UserResolver
            },
            children: [
              { path: '', redirectTo: 'edit', pathMatch: 'full' },
              { path: 'edit', component: EditUserComponent,
              data: { option: 'EditUser' }
              },
              { path: 'edit-company', component: EditCompanyComponent,
              data: { option: 'EditCompany' }
              },
              { path: 'edit-supplier', component: EditSupplierComponent,
              data: { option: 'EditSupplier' }
              },
              { path: 'edit-shipping', component: ShippingProtocolComponent,
              data: { option: 'EditShippingProtocol' }
              },
              { path: 'edit-shipping-proforma', component: ProtocolProformaComponent,
              data: { option: 'ProtocolProforma' }
              }
            ]
          }
        ],
        data: { option: 'Users' }
      },
      {
        path: 'seller', component: SellerComponent,
        resolve: {
          sellers: SellerResolver
        },
        runGuardsAndResolvers: 'always',
        children: [
          { path: '', component: ListSellerComponent, data: { option: 'Sellers' } },
          {
            path: ':id', component: DetailSellerComponent,
            data: { option: 'ViewSeller' },
            resolve: {
              sellers: SellerResolver
            },
            children: [
              { path: '', redirectTo: 'edit', pathMatch: 'full' },
              { path: 'edit', component: EditSellerComponent,
                data: { option: 'EditSeller' }
              },
              { path: 'client-seller', component: ClientSellerComponent,
                data: { option: 'ViewClient' } }
            ]
          }
        ],
        data: { option: 'Sellers' }
      },
      {
        path: 'order-list-client-byseller', component: ListOrderClientComponent,
        data: { option: 'OrdersBySellerList' }
      },
      { path: 'details-order-client/:id/view', component: DetailsOrderClientComponent,
      data: { option: 'OrdersDetailSeller' }
      },
      { path: 'list-basket-client', component: ListBasketComponent,
      data: { option: 'ListBasketClient' }
      },
      { path: 'list-basket', component: ListBasketClientComponent,
      data: { option: 'ListBasket' }
      },
      { path: 'list-basket-detail/:id/view', component: DetailsBasketClientComponent,
      data: { option: 'ListBasketDetail' }
      },
      {
        path: 'protocol', component: ProtocolComponent,
        runGuardsAndResolvers: 'always',
        children: [
          { path: '', redirectTo: 'protocol-client', pathMatch: 'full' },
          { path: 'protocol-client', component: ProtocolClientComponent,
            data: { option: 'ProtocolClient' }
          },
          { path: 'protocol-proforma', component: ProtocolProformaComponent,
            data: { option: 'ProtocolProforma' }
          }
        ],
        data: { option: 'Protocols' }
      }
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
