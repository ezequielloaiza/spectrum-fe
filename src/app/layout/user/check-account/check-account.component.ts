import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-check-account',
  templateUrl: './check-account.component.html',
  styleUrls: ['./check-account.component.scss']
})
export class CheckAccountComponent implements OnInit {

  listUsers: Array<any> = new Array;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getListUser();
  }

  getListUser(): void {
    this.userService.allUserBySeller$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listUsers = res.data;
      }
    });
  }

}
