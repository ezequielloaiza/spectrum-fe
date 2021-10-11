import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploadModule } from 'ng2-file-upload';
import { BreadcrumbProductComponent } from '../components/breadcrumb-product/breadcrumb-product.component';
import { CardProductComponent } from '../components/card-product/card-product.component';
import { InfoClientComponent } from '../components/info-client/info-client.component';
import { OrderTypeComponent } from '../components/order-type/order-type.component';
import { CommentComponent } from './comment/comment.component';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';
import { InfoParamsComponent } from './info-params/info-params.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgSelectModule,
    RouterModule,
    FileUploadModule
  ],
  declarations: [
    InfoParamsComponent,
    InfoClientComponent,
    BreadcrumbProductComponent,
    OrderTypeComponent,
    CardProductComponent,
    CommentComponent,
    UploadFileComponent,
    FooterButtonsComponent
  ],
  exports: [
    InfoParamsComponent,
    InfoClientComponent,
    BreadcrumbProductComponent,
    OrderTypeComponent,
    CardProductComponent,
    CommentComponent,
    UploadFileComponent,
    FooterButtonsComponent
  ]
})
export class ComponentsProductsModule {}
