import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../shared/modules/header/header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule, RoleGuard } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthorizationService } from '../shared/services';
import { ReportsComponent } from './reports.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportInvoicesOverdueComponent } from './reports-list/report-invoices-overdue/report-invoices-overdue.component';
import { ReportPaymentsComponent } from './reports-list/report-payments/report-payments.component';
import { ReportProductMembershipComponent } from './reports-list/report-product-membership/report-product-membership.component';
import { ReportBalanceClientComponent } from './reports-list/report-balance-client/report-balance-client.component';
import { ReportSalesByProductComponent } from './reports-list/report-sales-by-product/report-sales-by-product.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    TranslateModule,
    HeaderModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReportsComponent,
    ReportsListComponent,
    ReportInvoicesOverdueComponent,
    ReportProductMembershipComponent,
    ReportPaymentsComponent,
    ReportBalanceClientComponent,
    ReportProductMembershipComponent,
    ReportSalesByProductComponent
  ],
  entryComponents: [
    ReportInvoicesOverdueComponent,
    ReportProductMembershipComponent,
    ReportPaymentsComponent,
    ReportBalanceClientComponent,
    ReportProductMembershipComponent,
    ReportSalesByProductComponent
  ],
  providers: [RoleGuard, AuthorizationService]
})
export class ReportsModule { }
