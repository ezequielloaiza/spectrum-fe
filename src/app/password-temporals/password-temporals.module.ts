import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordTemporalsRoutingModule } from './password-temporals-routing.module';
import { PasswordTemporalsComponent } from './password-temporals.component';
import { ChangePasswordTemporalComponent } from './change-password-temporal/change-password-temporal.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../shared/modules/header/header.module';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PasswordTemporalsRoutingModule,
    TranslateModule,
    HeaderModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PasswordTemporalsComponent, ChangePasswordTemporalComponent]
})
export class PasswordTemporalsModule { }
