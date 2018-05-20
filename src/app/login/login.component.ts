import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserService } from '../shared/services/user/user.service';
import { StoreService } from '../http/store.service';
import { UserStorageService } from '../http/user-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private userService: UserService, private store: StoreService,
    private userStorageService: UserStorageService) {}

  user: any = {
    username: '',
    password: ''
  };

  message: String = '';

  ngOnInit() {}

  signIn(): void {
    this.userService.signIn$(this.user).subscribe(res => {
      if (res.code === 200) {
        this.userStorageService.saveCurrentUser(JSON.stringify(res.data));
        this.router.navigateByUrl('');
      } else {
        this.message = res.errors[0].detail;
      }
    }, error => {
      console.log('error', error);
    });
  }
}
