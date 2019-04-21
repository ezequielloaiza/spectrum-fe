import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialSessionsRoutingModule } from './initial-sessions-routing.module';
import { InitialSessionsComponent } from './initial-sessions.component';
import { ChangePasswordTemporalComponent } from './change-password-temporal/change-password-temporal.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../shared/modules/header/header.module';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProtocolsComponent } from './protocols/protocols.component';

@NgModule({
  imports: [
    CommonModule,
    InitialSessionsRoutingModule,
    TranslateModule,
    HeaderModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [InitialSessionsComponent, ChangePasswordTemporalComponent, ProtocolsComponent]
})
export class InitialSessionsModule { }
