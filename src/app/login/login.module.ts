import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {UserService} from '../shared/services/user/user.service';
import {StoreService} from '../http/store.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [LoginComponent],
    providers: [UserService,  StoreService]
})
export class LoginModule {}
