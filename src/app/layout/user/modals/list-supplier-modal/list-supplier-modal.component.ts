import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../../shared/services/suppliers/supplier.service';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'app-list-supplier-modal',
  templateUrl: './list-supplier-modal.component.html',
  styleUrls: ['./list-supplier-modal.component.scss']
})
export class ListSupplierModalComponent implements OnInit {

  closeResult: string;
  suppliers: Array<any> = new Array;
  auxSuppliers: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage: number = 6;
  form: FormGroup;
  valid = false;
  listSupp: any;
  listAux = [];
  list2: any;

  constructor(private supplierService: SupplierService,
    private modal: NgbActiveModal) { }

  ngOnInit() {
    this.advancedPagination = 1;
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.auxSuppliers = res.data;
        this.suppliers = this.auxSuppliers.slice(0, this.itemPerPage);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  pageChange(event) {
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.suppliers = this.auxSuppliers.slice(startItem, endItem);
  }

  getItems(ev: any) {
    this.suppliers = this.auxSuppliers;

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.suppliers = this.suppliers.filter((item) => {
        return ((item.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.country.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
          (item.contact.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    }
  }

  close(): void {
    this.modal.dismiss();
  }

  onSelection(id, checked) {
    var existe: boolean;
    existe = _.includes(this.listAux,  id);
    if (existe) {
      if (!checked) {
        _.remove(this.listAux,  function (n)  {
          return  n  ==  id;
        });
      }
    } else {
      this.listAux = _.concat(this.listAux, id);
    }
    this.listAux.length > 0 ? this.valid = true : this.valid = false;
  }

  save() {
    this.modal.close(this.listAux);
  }
}
