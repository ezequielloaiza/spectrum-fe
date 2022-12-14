import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { RecoveryPasswordComponent } from './login/recovery-password/recovery-password.component';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'products', loadChildren: './products/products.module#ProductsModule', canActivate: [AuthGuard] },
    { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', canActivate: [AuthGuard] },
    { path: 'initial-sessions', loadChildren: './initial-sessions/initial-sessions.module#InitialSessionsModule', canActivate: [AuthGuard] },
    { path: 'signin', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'recovery-password', component: RecoveryPasswordComponent },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
