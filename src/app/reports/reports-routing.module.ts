import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { RoleGuard } from '../shared';
import { ReportsListComponent } from './reports-list/reports-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    canActivateChild: [RoleGuard],
    children: [
        { path: '', component: ReportsListComponent, data: { option: 'ReportsList' }  }
    ] , data: { option: 'ReportsList' }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
