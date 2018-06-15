import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { Role } from '../../../shared/enum/role.enum';
import { SellerModalComponent } from '..';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private modalService: NgbModal,
    private translate: TranslateService) { }

  ngOnInit() {
    this.getListSellers();
    this.advancedPagination = 1;
  }

  getListSellers(): void {

    this.userService.findByRole$(Role.Seller).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listSellers = res.data;
        this.listSellersAux = res.data;
      }
    });
  }

  getItems(ev: any) {
    this.listSellers = this.listSellersAux;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.listSellers = this.listSellers.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.email.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.country.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.city.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  changeStatus(id): void {

    this.translate.get("Seller's status", { value: "Seller's status" }).subscribe((title: string) => {
      this.translate.get("Are you sure you want to change the status?", { value: "Are you sure you want to change the status?" }).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.userService.changeStatus$(id).subscribe(res => {
            this.translate.get('Status changed', { value: 'Status changed' }).subscribe((res: string) => {
              this.notification.success('', res);
              this.getListSellers();
            });
          });
        }, () => {
        });
      });
    });
  }

  openModal(): void {
    const modalRef = this.modalService.open(SellerModalComponent, { size: 'lg', windowClass: 'modal-content-seller' });
    modalRef.result.then((result) => {
      this.getListSellers();
    }, (reason) => {
    });
  }

  borrar(id) {
		this.userService.removeSeller$(id).subscribe(res => {
			if (res.code === CodeHttp.ok) {
				this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
					this.notification.success('', res);
        });
        this.getListSellers();
			} else if(res.code === CodeHttp.notAcceptable) {
				this.translate.get('It can not be deleted, it is associated with a client', {value: 'It can not be deleted, it is associated with a client'}).subscribe((res: string) => {
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
			this.translate.get('Are you sure do you want to delete this register?', {value: 'Are you sure do you want to delete this register?'}).subscribe((msg: string) => {
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
		this.listSellers = this.listSellersAux.slice(startItem,endItem);
  }
  

}


