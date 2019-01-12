import { Component, OnInit } from '@angular/core';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { OrderService } from '../../../shared/services/order/order.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { UserService } from '../../../shared/services';
import { Company } from '../../../shared/models/company';
import { NotificationBalanceOrderComponent } from '../../notification/notification-balance-order/notification-balance-order.component';

@Component({
  selector: 'app-modals-status',
  templateUrl: './modals-status.component.html',
  styleUrls: ['./modals-status.component.scss']
})
export class ModalsStatusComponent implements OnInit {

  form: FormGroup;
  order: any;
  filterStatus = [{ id: 0, name: "Pending" },
  { id: 1, name: "Processed" },
  { id: 2, name: "Ready to Ship" },
  { id: 3, name: "Shipped" }
  ];
  valid = false;
  idStatus: any;
  balace: any;
  company: Company = new Company();
  available: any;
  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderClientService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService,
    private userService: UserService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.initializeForm();
    this.getBalance();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
    });
  }

  close() {
    this.modalReference.close();
  }

  onSelectionChange(status) {
    this.valid = true;
    this.idStatus = status.id;
  }

  changeStatus(): void {
    // Si estaba pending o canceled y la cambia processed, readytoship o shipped
    // validar balance
    if ((this.order.status === 0 || this.order.status === 4) && (this.idStatus === 1 || this.idStatus === 2 || this.idStatus === 3 )) {
      this. openModal();
      this.close();
    } else {
        this.translate.get("Order's status", { value: "Order's status" }).subscribe((title: string) => {
          this.translate.get('Are you sure you want to change the status?',
          { value: 'Are you sure you want to change the status?' }).subscribe((msg: string) => {
            this.alertify.confirm(title, msg, () => {
                this.orderClientService.changeStatus$(this.order.idOrder, this.idStatus).subscribe(res => {
                  if (res.code === CodeHttp.ok) {
                    this.close();
                    this.translate.get('Successfully Update', { value: 'Successfully Update' }).subscribe((res: string) => {
                      this.notification.success('', res);
                    });
                  } else {
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
  }

  getBalance() {
    this.userService.findById$(this.order.user.idUser).subscribe(res => {
      if (res.code === CodeHttp.ok) {
         this.company = res.data.company;
         this.balace = this.company.balance;
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  validateAvailableBalance() {
    let available = true;
    if (this.company.paymentMethod === 1 && ((this.order.total) > this.balace)) { // Postpago
        available = false;
    }
    this.available = available;
  }

  openModal(): void {
    const modalRef = this.modalService.open( NotificationBalanceOrderComponent, { size: 'lg', windowClass: 'modal-content-border' });
    modalRef.componentInstance.orderModal = this.order;
    modalRef.componentInstance.newStatus = this.idStatus;
    modalRef.componentInstance.type = 3;
    modalRef.result.then((result) => {
      this.ngOnInit();
    } , (reason) => {
      this.close();
    });
  }
}
