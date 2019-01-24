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
    ReportsListComponent
  ],
  providers: [RoleGuard, AuthorizationService]
})
export class ReportsModule { }
