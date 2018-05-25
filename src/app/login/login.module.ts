import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {UserService} from '../shared/services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
      CommonModule,
      LoginRoutingModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
    declarations: [LoginComponent],
    providers: [UserService]
})
export class LoginModule {}
