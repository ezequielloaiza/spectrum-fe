import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {UserService} from '../shared/services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxSpinnerModule
    ],
    declarations: [LoginComponent],
    providers: [UserService]
})
export class LoginModule {}
