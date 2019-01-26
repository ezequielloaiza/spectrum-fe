import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Role } from '../../../../shared/enum/role.enum';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
@Component({
  selector: 'app-list-user-modal',
  templateUrl: './list-user-modal.component.html',
  styleUrls: ['./list-user-modal.component.scss']
})
export class ListUserModalComponent implements OnInit {

  form: FormGroup;
  listSellers: Array<any> = new Array;
  listSellersAux: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  selectedSeller: User = new User();
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
      name: ['', []],
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
    const startItem = (event - 1) * this.itemPerPage;
    const endItem = event * this.itemPerPage;
    this.listSellers = this.listSellersAux.slice(startItem, endItem);
  }

  onSelectionChange(seller) {
    this.valid = true;
    this.selectedSeller = seller;
  }

  transfer() {
    this.modalReference.close(this.selectedSeller);
  }
}
