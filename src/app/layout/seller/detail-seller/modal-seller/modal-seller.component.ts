import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Role } from '../../../../shared/enum/role.enum';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { Seller } from '../../../../shared/models/seller';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-modal-seller',
  templateUrl: './modal-seller.component.html',
  styleUrls: ['./modal-seller.component.scss']
})
export class ModalSellerComponent implements OnInit {
  form: FormGroup;
  listSellers: Array<any> = new Array;
  listSellersAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 5;
  selectedSeller:User = new User();
  client: any;
  valid = false;



  constructor(private userService: UserService,
    private alertify: AlertifyService,
    private notification: ToastrService,
    private modalService: NgbModal,
    private translate: TranslateService,
    private formBuilder: FormBuilder,
    public modalReference: NgbActiveModal) { }

  ngOnInit() {
    this.getListSellers();
    this.advancedPagination = 1;
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name: [this.client.name, []],
    });
  }

  getListSellers(): void {

    this.userService.findByRoleActive$(Role.Seller).subscribe(res => {
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
          (item.country.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.city.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  pageChange(event) {
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.listSellers = this.listSellersAux.slice(startItem, endItem);
  }

  transfer() {
    this.translate.get('confirm transfer', { value: 'confirm transfer' }).subscribe((title: string) => {
      this.translate.get('Are you sure you want to transfer the client?', { value: 'Are you sure you want to transfer the client?' }).subscribe((msg: string) => {
        this.alertify.confirm(title, msg, () => {
          this.userService.transferClient$(this.client.idUser,this.selectedSeller.idUser).subscribe(res => {
            if (res.code === CodeHttp.ok) {
              this.close();
              this.translate.get('Successfully transferred', { value: 'Successfully transferred' }).subscribe((res: string) => {
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
  };

  onSelectionChange(seller) {
    this.valid = true;
    this.selectedSeller = seller;
  }

  close() {
    this.modalReference.close();
  }


}
