import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordTemporalsComponent } from './password-temporals.component';
import { ChangePasswordTemporalComponent } from './change-password-temporal/change-password-temporal.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordTemporalsComponent,
    children: [
        { path: '', component: ChangePasswordTemporalComponent }
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordTemporalsRoutingModule { }
