import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderClient } from '../../../shared/models/orderclient';
import { OrderService } from '../../../shared/services/order/order.service'
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '../../../shared/services/alertify/alertify.service';
import { CodeHttp } from '../../../shared/enum/code-http.enum';
@Component({
  selector: 'app-modal-status',
  templateUrl: './modal-status.component.html',
  styleUrls: ['./modal-status.component.scss']
})
export class ModalStatusComponent implements OnInit {

  form: FormGroup;
  order: any;
  filterStatus = [{ id: 0, name: "Pending" },
  { id: 1, name: "Processed" },
  { id: 2, name: "Pay" },
  { id: 3, name: "Sent" }
  ];
  valid = false;
  idStatus: any;
  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private orderClientService: OrderService,
    private notification: ToastrService,
    private translate: TranslateService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  close() {
    this.modalReference.close();
  }

  onSelectionChange(status) {
    this.valid = true;
    this.idStatus = status.id;
  }

  changeStatus(): void {

    this.translate.get("Order's status", { value: "Order's status" }).subscribe((title: string) => {
      this.translate.get("Are you sure you want to change the status?", { value: "Are you sure you want to change the status?" }).subscribe((msg: string) => {
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
      })
    })
  }
}


