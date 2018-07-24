import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, PageHeaderModule } from './shared';
import { UserStorageService } from './http/user-storage.service';
import { RecoveryPasswordComponent } from './login/recovery-password/recovery-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LibHttpModule } from './http/lib-http.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PasswordTemporalsComponent } from '../app/password-temporals/password-temporals.component';
import { ChangePasswordTemporalComponent } from '../app/password-temporals/change-password-temporal/change-password-temporal.component';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxSpinnerModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        ReactiveFormsModule,
        LibHttpModule,
        ToastrModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [AppComponent, RecoveryPasswordComponent, PasswordTemporalsComponent, ChangePasswordTemporalComponent],
    providers: [AuthGuard, UserStorageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
