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
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';
import { UserStorageService } from '../../../http/user-storage.service';
import { ModalUserStatusComponent } from '../modals/modal-user-status/modal-user-status.component';

@Component({
  selector: 'app-list',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listUsers: Array<any> = new Array;
  listUsersAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  	/*initial order*/
	orderByField = 'idUser';
	reverseSort = true;
  typeSort = 0;
  today: Date = new Date();
  connected = false;

  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private modalService: NgbModal,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
    private userStorageService: UserStorageService) { }

  ngOnInit() {
    this.connected = this.userStorageService.getIsIntegratedQBO();
    this.getListUser(-1);
    this.advancedPagination = 1;
  }

  getListUser(filter): void {
    this.spinner.show();
    this.userService.findByRole$(Role.User, filter).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listUsers = res.data;
        _.each(this.listUsers, function(user) {
          user.companyName = user.company.companyName;
          user.username = user.username;
          user.companyCountry = user.company.country;
        });
        this.listUsersAux = res.data;
        this.listUsers = _.orderBy(this.listUsers, ['date'], ['desc']);
        this.listUsersAux = _.orderBy(this.listUsersAux, ['date'], ['desc']);
        this.listUsers = this.listUsersAux.slice(0, this.itemPerPage);
        this.spinner.hide();
      } else {
        console.log(res.errors[0].detail);
        this.spinner.hide();
      }
    }, error => {
      console.log('error', error);
      this.spinner.hide();
    });
  }

  sortUser(key) {
		if (this.orderByField !== key) {
			this.typeSort = 0;
			this.reverseSort = false;
		}
		this.orderByField = key;
		if (this.orderByField !== 'idUser') {
			this.typeSort ++;
			if (this.typeSort > 2) {
				this.typeSort = 0;
				this.orderByField = 'idUser';
				key = 'idUser';
        this.reverseSort = true;
        this.getListUser(-1);
			}
    }
    let usersSort = this.listUsersAux.sort(function(a, b) {
        let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		this.listUsersAux = usersSort;
		if (this.reverseSort) {
			this.listUsersAux = usersSort.reverse();
		}
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
	}

  getItems(ev: any) {
    this.listUsers = this.listUsersAux;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.listUsers = this.listUsers.filter((item) => {
        return ((item.name !== null && item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
        (item.email !== null && item.email.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
        (item.company.country.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
        (item.company.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  changeStatus(user): void {
    const modalRef = this.modalService.open(ModalUserStatusComponent,
      { size: 'sm', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
      modalRef.componentInstance.user = user;
      modalRef.result.then((result) => {
        this.getListUser(-1);
        this.moveFirstPage();
      } , (reason) => {
      });
  }

  openModal(): void {
    const modalRef = this.modalService.open(UserModalComponent,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.result.then((result) => {
      this.getListUser(-1);
      this.moveFirstPage();
    } , (reason) => {
    });
  }

  moveFirstPage() {
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
  }

  filter(value: number): void {
    this.getListUser(value);
  }

  pageChange(event) {
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listUsers = this.listUsersAux.slice(startItem, endItem);
  }

  downloadCustomer() {
    this.spinner.show();
    this.userService.reportByRole$(Role.User).subscribe(res => {
      const aux = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
        day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes()};
      const filename = 'Customers-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
      saveAs(res, filename);
      this.spinner.hide();
    }, error => {
      console.log('error', error);
      this.spinner.hide();
      this.translate.get('The file could not be generated', { value: 'The file could not be generated' }).subscribe((res: string) => {
        this.notification.error('', res);
      });
    });
  }

}
