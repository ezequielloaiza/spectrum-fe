import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../shared/services/category/category.service';
import { AlertifyService } from '../../shared/services/alertify/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CodeHttp } from '../../shared/enum/code-http.enum';
import { CategoryModalComponent } from './modals/category-modal/category-modal.component';
import { FtpService } from '../../shared/services/ftp/ftp.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	closeResult: string;
	categories: Array<any> = new Array;
	auxCategories: Array<any> = new Array;
	advancedPagination: number;
	itemPerPage: number = 5;
	/*initial order*/
	orderByField = 'idCategory';
	reverseSort = true;
	typeSort = 0;

  constructor(private modalService: NgbModal,
              private categoryService: CategoryService,
              private alertify: AlertifyService,
              private ftpService: FtpService,
							private notification: ToastrService,
							private translate: TranslateService){ }

  ngOnInit() {
    this.getCategories();
    this.advancedPagination = 1;
    this.ftpService.uploadFile$('ruta').subscribe(res => {
      if (res.code === CodeHttp.ok) {
        console.log('OK');
      }
    });
	}

	open(category,action) {
		const modalRef = this.modalService.open(CategoryModalComponent);
		modalRef.componentInstance.category = category;
		modalRef.componentInstance.action = action;
		modalRef.result.then((result) => {
			this.getCategories();
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

	getCategories() {
    this.categoryService.findAll$().subscribe(res => {
      if (res.code === CodeHttp.ok) {
				this.auxCategories = res.data;
				this.sortCategory(this.orderByField);
				//this.categories = this.auxCategories.slice(0,this.itemPerPage);
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
		this.orderByField = 'idCategory';
		this.sortCategory(this.orderByField);
		this.pageChange(this.advancedPagination);
	}

	sortCategory(key) {
		if (this.orderByField !== key) {
			this.typeSort = 0;
			this.reverseSort = false;
		}
		this.orderByField = key;
		if (this.orderByField !== 'idCategory') {
			this.typeSort ++;
			if (this.typeSort > 2) {
				this.typeSort = 0;
				this.orderByField = 'idCategory';
				key = 'idCategory';
				this.reverseSort = true;
			}
		}
    let suppliersCategory = this.auxCategories.sort(function(a, b) {
        let x = a[key].toString().toLowerCase(); let y = b[key].toString().toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
		this.auxCategories = suppliersCategory;
		if (this.reverseSort) {
			this.auxCategories = suppliersCategory.reverse();
		}
		this.advancedPagination = 1;
		this.pageChange(this.advancedPagination);
	}

	borrar(id) {
		this.categoryService.removeById$(id).subscribe(res => {
			if (res.code === CodeHttp.ok) {
				this.getCategories();
				this.translate.get('Successfully Deleted', {value: 'Successfully Deleted'}).subscribe((res: string) => {
					this.notification.success('', res);
				});
			}else if(res.code === CodeHttp.notAcceptable) {
				this.translate.get('Can not be eliminated, is associated with a product', {value: 'Can not be eliminated, is associated with a product'}).subscribe((res: string) => {
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
		this.categories = this.auxCategories.slice(startItem,endItem);
	}

}
