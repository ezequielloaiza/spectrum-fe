import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { GoogleService, UserService, AuthorizationService } from '../../../../shared/services';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { User } from '../../../../shared/models/user';
import { ModalSellerComponent } from '../modal-seller/modal-seller.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';

@Component({
  selector: 'app-client-seller',
  templateUrl: './client-seller.component.html',
  styleUrls: ['./client-seller.component.scss']
})
export class ClientSellerComponent implements OnInit {

  canEdit = false;
  form: FormGroup;
  idSeller: any;
  searching = false;
  searchFailed = false;
  listCustomers: Array<any> = new Array;
  listCustomersAux: Array<any> = new Array;
  memberships: Array<any> = new Array;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  advancedPagination: number;
  itemPerPage: number = 5;
  client : User = new User();

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private googleService: GoogleService,
              private userService: UserService,
              private modalService: NgbModal,
              private translate: TranslateService,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private authorizationService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
    if(!this.authorizationService.hasPermission('Sellers')){
			this.router.navigate(['/dashboard']);
		}
    this.idSeller = this.route.parent.snapshot.paramMap.get('id');
    this.getCustomers(this.idSeller);
    this.advancedPagination = 1;
  }

  getCustomers(idSeller): void {
    this.userService.allCustomersBySeller$(idSeller).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listCustomers = res.data;
        this.listCustomersAux = res.data;
      }
    });
  }

  pageChange(event) {
		let startItem = (event - 1) * this.itemPerPage;
		let endItem = event * this.itemPerPage;
		this.listCustomers = this.listCustomersAux.slice(startItem,endItem);
  }

  getItems(ev: any) {
    this.listCustomers = this.listCustomersAux;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.listCustomers = this.listCustomers.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.email.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.country.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.city.toLowerCase().indexOf(val.toLowerCase()) > -1)||
          (item.company.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.company.businessType.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  open(client) {
		const modalRef = this.modalService.open(ModalSellerComponent, { size: 'lg', windowClass: 'modal-content-border' });
		modalRef.componentInstance.client = client;
		modalRef.result.then((result) => {
			this.getCustomers(this.idSeller);
		} , (reason) => {

		});
  }

  remove(id) {
    this.translate.get('Confirm withdrawal', { value: 'Confirm withdrawal' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to withdraw the client?', { value: 'Are you sure you want to withdraw the client?' }).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.userService.transferClient$(id,0).subscribe(res => {
            if (res.code === CodeHttp.ok) {
              this.getCustomers(this.idSeller);
              this.translate.get('Retired successfully', { value: 'Retired successfully' }).subscribe((res: string) => {
                this.notification.success('', res);
              });
            }
            else {
              console.log(res.errors[0].detail);
            }
          }, error => {
            console.log('error', error);
          });
        }, () => {
        });
      });
    });
  }

  filter(value: number): void {
    if (value !== null) {
      this.listCustomers = _.filter(this.listCustomersAux, { 'status': value });
      return;
    }
    this.listCustomers = this.listCustomersAux;
  }
}
