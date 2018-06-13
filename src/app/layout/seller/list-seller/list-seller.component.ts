import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CodeHttp } from '../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-list-seller',
  templateUrl: './list-seller.component.html',
  styleUrls: ['./list-seller.component.scss']
})
export class ListSellerComponent implements OnInit {

  listSellers: Array<any> = new Array;
  listSellersAux: Array<any> = new Array;

  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getListSellers();
  }

  getListSellers(): void {
    this.userService.findByRole$().subscribe(res => {
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
    this.alertify.confirm('Delete Shipping Address', 'Are you sure do you want to delete this register?', () => {
      this.userService.changeStatus$(id).subscribe(res => {
        this.notification.success('User save', 'Success');
        this.getListSellers();
      });
    }, () => { });
  }

  openModal(): void {
   /* const modalRef = this.modalService.open(UserModalComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.result.then((result) => {
      this.getListSellers();
    } , (reason) => {
    });*/
  }

}


