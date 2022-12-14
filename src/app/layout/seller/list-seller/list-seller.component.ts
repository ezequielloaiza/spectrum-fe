import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Role } from '../../../shared/enum/role.enum';
import { TranslateService } from '@ngx-translate/core';
import { SellerModalComponent } from '../modals/seller-modal/seller-modal.component';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-list-seller',
  templateUrl: './list-seller.component.html',
  styleUrls: ['./list-seller.component.scss']
})
export class ListSellerComponent implements OnInit {

  listSellers: Array<any> = new Array;
  listSellersAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 5;
  /*initial order*/
  orderByField = 'idUser';
  reverseSort = true;
  typeSort = 0;
  today: Date = new Date();

  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private modalService: NgbModal,
    private translate: TranslateService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getListSellers(-1);
    this.advancedPagination = 1;
  }

  getListSellers(filter): void {
    this.spinner.show();
    this.userService.findByRole$(Role.Seller, filter).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listSellers = res.data;
        this.listSellersAux = res.data;
        this.listSellers = _.orderBy(this.listSellers, ['date'], ['desc']);
        this.listSellersAux = _.orderBy(this.listSellersAux, ['date'], ['desc']);
        this.listSellers = this.listSellersAux.slice(0, this.itemPerPage);
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

  sortSeller(key) {
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
        this.getListSellers(-1);
			}
		}
    let sellersSort = this.listSellersAux.sort(function(a, b) {
      let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		this.listSellersAux = sellersSort;
		if (this.reverseSort) {
			this.listSellersAux = sellersSort.reverse();
		}
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
	}

  getItems(ev: any) {
    this.listSellers = this.listSellersAux;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.listSellers = this.listSellers.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.email.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.country.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.city.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  changeStatus(id): void {
    this.translate.get("Seller's status", { value: "Seller's status" }).subscribe((title: string) => {
      this.translate.get("Are you sure you want to change the status?",
      { value: "Are you sure you want to change the status?" }).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.userService.changeStatus$(id).subscribe(res => {
            this.translate.get('Status changed', { value: 'Status changed' }).subscribe((res: string) => {
              this.notification.success('', res);
              this.getListSellers(-1);
            });
          });
        }, () => {
        });
      });
    });
  }

  openModal(): void {
    const modalRef = this.modalService.open(SellerModalComponent,
    { size: 'lg', windowClass: 'modal-content-seller', backdrop  : 'static', keyboard  : false });
    modalRef.result.then((result) => {
      this.getListSellers(-1);
      this.moveFirstPage();
    }, (reason) => {
    });
  }

  moveFirstPage() {
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
  }

  borrar(id) {
		this.userService.removeSeller$(id).subscribe(res => {
			if (res.code === CodeHttp.ok) {
				this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
					this.notification.success('', res);
        });
        this.getListSellers(-1);
			} else if (res.code === CodeHttp.notAcceptable) {
        this.translate.get('It can not be deleted, it is associated with a customer',
        { value: 'It can not be deleted, it is associated with a customer'}).subscribe((res: string) => {
					this.notification.warning('', res);
				});
			}
			else {
				console.log(res.errors[0].detail);
			}
		}, error => {
			console.log('error', error);
		});
	}

	delete(id) {
		this.translate.get('Confirm Delete', {value: 'Confirm Delete'}).subscribe((title: string) => {
      this.translate.get('Are you sure do you want to delete this register?',
      { value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {
				this.alertify.confirm(title, msg, () => {
					this.borrar(id);
				}, () => {
				});
			});
		});
  }

  pageChange(event) {
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.listSellers = this.listSellersAux.slice(startItem, endItem);
  }

  filter(value: number): void {
    this.getListSellers(value);
  }

  downloadSeller() {
    this.spinner.show();
    this.userService.reportByRole$(Role.Seller).subscribe(res => {
      const aux = {year: this.today.getUTCFullYear(), month: this.today.getMonth() + 1,
        day: this.today.getDate(), hour: this.today.getHours(), minutes: this.today.getMinutes()};
      const filename = 'Sellers-' + aux.year + aux.month + aux.day + aux.hour + aux.minutes + '.pdf';
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


