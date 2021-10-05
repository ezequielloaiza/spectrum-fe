import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbProductComponent } from '../components/breadcrumb-product/breadcrumb-product.component';
import { CardProductComponent } from '../components/card-product/card-product.component';
import { InfoClientComponent } from '../components/info-client/info-client.component';
import { InfoProductComponent } from '../components/info-product/info-product.component';
import { OrderTypeComponent } from '../components/order-type/order-type.component';
import { CommentComponent } from './comment/comment.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgSelectModule
  ],
  declarations: [
    InfoProductComponent,
    InfoClientComponent,
    BreadcrumbProductComponent,
    OrderTypeComponent,
    CardProductComponent,
    CommentComponent,
    UploadFileComponent
  ],
  exports: [
    InfoProductComponent,
    InfoClientComponent,
    BreadcrumbProductComponent,
    OrderTypeComponent,
    CardProductComponent,
    CommentComponent,
    UploadFileComponent
  ]
})
export class ComponentsProductsModule {}
