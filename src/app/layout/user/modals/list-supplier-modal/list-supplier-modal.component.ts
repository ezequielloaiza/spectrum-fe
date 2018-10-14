import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../../shared/services/suppliers/supplier.service';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
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
  listSuppliers: Array<any> = new Array;
  listAux = [];
  list2: any;
  selectedAll: any;

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
        this.selectedAll = false;
        this.getSuppliersSelected(res.data);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  getSuppliersSelected(suppliers) {
    if (this.listSuppliers.length > 0) {
      this.listAux = this.listSuppliers;
      const arrayAux = this.listAux;
      _.each(suppliers, function(item) {
        let exist: boolean;
        const id = item.idSupplier;
        exist = _.includes(arrayAux, id);
        if (exist) {
          item.checked = true;
        }
      });
      this.selectedAll = this.listSuppliers.length > 5 ?  true : false;
      this.valid = true;
    }
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
    this.selectedAll = false;
    this.listAux.length > 0 ? this.valid = true : this.valid = false;
  }

  onSelectionAll(event) {
    let arrayAux = this.listAux;
    const check = event.target.checked;
    _.each(this.suppliers, function(item) {
      item.checked = check;
      let existe: boolean;
      const id = item.idSupplier;
      existe = _.includes(arrayAux, id);
      if (existe) {
        if (!check) {
          _.remove(arrayAux,  function (n)  {
            return n === id;
          });
        }
      } else {
        arrayAux = _.concat(arrayAux, id);
      }
    });
    this.selectedAll = check;
    this.listAux = arrayAux;
    this.listAux.length > 0 ? this.valid = true : this.valid = false;
  }

  save() {
    this.modal.close(this.listAux);
  }
}
