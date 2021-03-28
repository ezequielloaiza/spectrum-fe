import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierUserModalComponent } from '../../modals/supplier-user-modal/supplier-user-modal.component';
import { SupplierService } from '../../../../shared/services/suppliers/supplier.service';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private supplierService: SupplierService,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService) { }

  listSupplierUser: Array<any> = new Array;
  listSupplier: Array<any> = new Array;
  id: any;
  canEdit: boolean = true;
  selectedSupplier: any = null;

  ngOnInit() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.getSupplierByUser(this.id);
  }


  getSupplierByUser(id: any) {
    this.supplierService.findByUser$(id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.listSupplierUser = res.data;
        this.getSupplierAll(this.listSupplierUser);
      }
    });
  }

  getSupplierAll(list) {
    this.supplierService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        let suppliers = [];
        _.each(res.data, function(_supplier) {
          if (!_.find(list, { 'idSupplier': _supplier.idSupplier })) {
            suppliers = _.concat(suppliers, _supplier);
          }
        });
        this.listSupplier = suppliers;
      }
    });
  }

  add() {
    this.canEdit = false;
  }

  cancel() {
    this.canEdit = true;
    this.selectedSupplier = null;
  }

  save() {
    const obj = {
      userId: this.id,
      supplierId: this.selectedSupplier
    }

    this.supplierService.saveSupplierUser$(obj).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.translate.get('Saved success', { value: 'Saved success' }).subscribe((res: string) => {
          this.canEdit = true;
          this.selectedSupplier = null;
          this.notification.success('', res);
          this.getSupplierByUser(this.id);
        });
      }
    });
  }

  remove(id: any) {
    const obj = {
      userId: this.id,
      supplierId: id
    };

    this.supplierService.checkSupplierUser$(obj).subscribe(res => {
      if (res.code === CodeHttp.ok) {
         if (res.data.length > 0) {
          this.translate.get('The client has orders associated with the provider',
           { value: 'The client has orders associated with the provider' }).subscribe((res: string) => {
            this.notification.warning('', res);
          });
         } else {
          this.translate.get('Supplier', { value: 'Supplier' }).subscribe((title: string) => {
            this.translate.get('Are you sure you want to delete this supplier?',
            { value: 'Are you sure you want to delete this supplier?' })
            .subscribe((msg: string) => {
              this.alertify.confirm(title, msg, () => {
                this.supplierService.removeSupplierUser$(obj).subscribe(res => {
                  this.translate.get('Supplier deleted', { value: 'Supplier changed' }).subscribe((res: string) => {
                    this.notification.success('', res);
                    this.getSupplierByUser(this.id);
                  });
                });
              }, () => {
              });
            });
          });
         }
      }
    });
  }

}
