import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Pipe, PipeTransform } from '@angular/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../modals/user-modal/user-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-check-account',
  templateUrl: './check-account.component.html',
  styleUrls: ['./check-account.component.scss']
})
export class CheckAccountComponent implements OnInit {

  listUsers: Array<any> = new Array;
  listUsersAux: Array<any> = new Array;

  constructor(private userService: UserService, private alertify: AlertifyService,
    private notification: ToastrService, private modalService: NgbModal,
    private translate: TranslateService ) { }

  ngOnInit() {
    this.getListUser();
  }

  getListUser(): void {
    this.userService.allUserBySeller$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listUsers = res.data;
        this.listUsersAux = res.data;
      }
    });
  }

  getItems(ev: any) {
    this.listUsers = this.listUsersAux;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.listUsers = this.listUsers.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
        (item.email.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
        (item.company.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  changeStatus(id): void {
    this.alertify.confirm('Delete Shipping Address', 'Are you sure do you want to delete this register?', () => {
      this.userService.changeStatus$(id).subscribe(res => {
        this.notification.success('User save', 'Success');
        this.getListUser();
      });
    }, () => {
    });
  }

  open(user, action) {
    const modalRef = this.modalService.open(UserModalComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.action = action;
    modalRef.result.then((result) => {
    this.getListUser();
    }, (reason) => {

    });
  }

}


@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      console.log('22', items);
      return [];
    }

    if (!searchText) {
      return items;
    }

  return items.filter( (item) => {
    return (String(item.status).indexOf(searchText.toString().toLowerCase()) > -1);
    });
   }
}
