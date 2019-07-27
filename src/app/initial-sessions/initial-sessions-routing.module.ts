import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialSessionsComponent } from './initial-sessions.component';
import { RoleGuard } from '../shared';
import { ChangePasswordTemporalComponent } from './change-password-temporal/change-password-temporal.component';
import { ProtocolsComponent } from './protocols/protocols.component';

const routes: Routes = [
  {
    path: '',
    component: InitialSessionsComponent,
    canActivateChild: [RoleGuard],
    children: [
        { path: 'change-password', component: ChangePasswordTemporalComponent, data: { option: 'ChangePassword' } },
        { path: 'protocols', component: ProtocolsComponent, data: { option: 'InitialsProtocols' } }
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialSessionsRoutingModule { }
