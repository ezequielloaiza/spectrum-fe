import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../modals/user-modal/user-modal.component';
import { Role } from '../../../shared/enum/role.enum';
import * as _ from 'lodash';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listUsers: Array<any> = new Array;
  listUsersAux: Array<any> = new Array;

  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private modalService: NgbModal,
    private translate: TranslateService) { }

  ngOnInit() {
    this.getListUser();
  }

  getListUser(): void {
    this.userService.findByRole$(Role.User).subscribe(res => {
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
    this.translate.get("Customer status", { value: "Customer status" }).subscribe((title: string) => {
      this.translate.get("Are you sure you want to change the status?", { value: "Are you sure you want to change the status?" }).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.userService.changeStatus$(id).subscribe(res => {
            this.translate.get('Status changed', { value: 'Status changed' }).subscribe((res: string) => {
              this.notification.success('', res);
              this.getListUser();
            });
          });
        }, () => {
        });
      });
    });
  }

  openModal(): void {
    const modalRef = this.modalService.open(UserModalComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.result.then((result) => {
      this.getListUser();
    } , (reason) => {
    });
  }

  filter(value: number): void {
    if (value !== null) {
      this.listUsers = _.filter(this.listUsersAux, { 'status': value });
      return;
    }
    this.listUsers = this.listUsersAux;
  }

}
