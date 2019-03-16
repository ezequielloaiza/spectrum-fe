import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EntrustingCompanyService } from '../../shared/services/entrustingCompany/entrusting-company.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { EntrustingCompanyModalComponent } from './modals/entrusting-company-modal/entrusting-company-modal.component';

@Component({
  selector: 'app-entrusting-company',
  templateUrl: './entrusting-company.component.html',
  styleUrls: ['./entrusting-company.component.scss']
})
export class EntrustingCompanyComponent implements OnInit {

  closeResult: string;
  entrustingCompanies: Array<any> = new Array;
  auxEntrustingCompanies: Array<any> = new Array;
  advancedPagination: number;
  itemPerPage = 5;
  /*initial order*/
  orderByField = 'idEntrustingCompany';
  reverseSort = true;
  typeSort = 0;

  constructor(private modalService: NgbModal,
              private entrustingCompanyService: EntrustingCompanyService,
              private alertify: AlertifyService,
              private notification: ToastrService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.getEntrustingCompanies();
    this.advancedPagination = 1;
  }

  open(entrustingCompany, action) {
    const modalRef = this.modalService.open(EntrustingCompanyModalComponent ,
    { size: 'lg', windowClass: 'modal-content-border', backdrop  : 'static', keyboard  : false });
    modalRef.componentInstance.entrustingCompany = entrustingCompany;
    modalRef.componentInstance.action = action;
    modalRef.result.then((result) => {
      this.getEntrustingCompanies();
      this.moveFirstPage();
    } , (reason) => {
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getEntrustingCompanies() {
    this.entrustingCompanyService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.auxEntrustingCompanies = res.data;
        this.sortEntrustingCompany(this.orderByField);
      } else {
        console.log(res.errors[0].detail);
      }
    }, error => {
      console.log('error', error);
    });
  }

  moveFirstPage() {
    this.advancedPagination = 1;
    this.reverseSort = true;
    this.typeSort = 0;
    this.orderByField = 'idEntrustingCompany';
    this.sortEntrustingCompany(this.orderByField);
    this.pageChange(this.advancedPagination);
  }

  sortEntrustingCompany(key) {
    if (this.orderByField !== key) {
      this.typeSort = 0;
      this.reverseSort = false;
    }
    this.orderByField = key;
    if (this.orderByField !== 'idEntrustingCompany') {
      this.typeSort ++;
      if (this.typeSort > 2) {
        this.typeSort = 0;
        this.orderByField = 'idEntrustingCompany';
        key = 'idEntrustingCompany';
        this.reverseSort = true;
      }
    }
    const entrustingCompany = this.auxEntrustingCompanies.sort(function(a, b) {
      if (a && b) {
        let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }
    });
    this.auxEntrustingCompanies = entrustingCompany;
    if (this.reverseSort) {
      this.auxEntrustingCompanies = entrustingCompany.reverse();
    }
    this.advancedPagination = 1;
    this.pageChange(this.advancedPagination);
  }

  deleteEntrustingCompany(id) {
    this.entrustingCompanyService.removeById$(id).subscribe(res => {
      if (res.code === CodeHttp.ok) {
        this.getEntrustingCompanies();
        this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
          this.notification.success('', res);
        });
      } else if (res.code === CodeHttp.notAcceptable) {
        this.translate.get('Can not be eliminated, is associated with a product',
        { value: 'Can not be eliminated, is associated with a product'}).subscribe((res: string) => {
          this.notification.warning('', res);
        });
      } else {
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
          this.deleteEntrustingCompany(id);
        }, () => {
        });
      });
    });
  }

  pageChange(event) {
    let startItem = (event - 1) * this.itemPerPage;
    let endItem = event * this.itemPerPage;
    this.entrustingCompanies = this.auxEntrustingCompanies.slice(startItem,endItem);
  }

}
