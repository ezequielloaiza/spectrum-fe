import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from '../../../../shared/services/category/category.service';
import { ToastrService } from 'ngx-toastr';
import { GoogleService } from '../../../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { Validators } from '@angular/forms';
import { CodeHttp } from '../../../../shared/enum/code-http.enum';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss']
})
export class CategoryModalComponent implements OnInit {

  form: FormGroup;
  category: any;
  action: string;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  public model: any;


  constructor(
    public modalReference: NgbActiveModal,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private notification: ToastrService,
    private googleService: GoogleService,
    private translate: TranslateService ) {}

   initializeForm() {
    this.form = this.formBuilder.group({ 
      id          : [this.action === 'edit' ? this.category.idCategory : ''],
      name        : [this.action === 'edit' ? this.category.name : '', [ Validators.required]],
      description : [this.action === 'edit' ? this.category.description : '']
    });
  }

  ngOnInit() {
    this.initializeForm();
  }

  save(): void {
    if (this.action !== 'edit') {
      this.categoryService.save$(this.form.value).subscribe(res => {
        if (res.code === CodeHttp.ok) {
          this.close();
          this.translate.get('Successfully Saved', {value: 'Successfully Saved'}).subscribe((res: string) => {
            this.notification.success('', res);
          });
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    } else {
      console.log('save',this.form.value);
      this.categoryService.update$(this.form.value).subscribe(res => {
        this.translate.get('Successfully Updated', {value: 'Successfully Updated'}).subscribe((res: string) => {
          this.notification.success('', res);
        });
        if (res.code === CodeHttp.ok) {
          this.close();
        } else {
          console.log(res.errors[0].detail);
        }
      }, error => {
        console.log('error', error);
      });
    }
  }

  close() {
    this.modalReference.close();
  }

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }

}
