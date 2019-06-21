import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialSessionsComponent } from './initial-sessions.component';
import { ChangePasswordTemporalComponent } from './change-password-temporal/change-password-temporal.component';
import { ProtocolsComponent } from './protocols/protocols.component';

const routes: Routes = [
  {
    path: '',
    component: InitialSessionsComponent,
    children: [
        { path: 'change-password', component: ChangePasswordTemporalComponent },
        { path: 'protocols', component: ProtocolsComponent }
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialSessionsRoutingModule { }
