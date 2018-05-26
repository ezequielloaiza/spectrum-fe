import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../shared/modules/header/header.module';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    HeaderModule,
    NgbModule.forRoot(),
    PageHeaderModule
  ],
  declarations: [ProductsComponent, ProductsListsComponent, ProductDetailComponent]
})
export class ProductsModule { }
