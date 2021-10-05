import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbProductComponent } from '../components/breadcrumb-product/breadcrumb-product.component';
import { CardProductComponent } from '../components/card-product/card-product.component';
import { ComponentsProductsModule } from '../components/components-products.module';
import { InfoClientComponent } from '../components/info-client/info-client.component';
import { InfoProductComponent } from '../components/info-product/info-product.component';
import { OrderTypeComponent } from '../components/order-type/order-type.component';
import { ProductViewXCelComponent } from './product-view-x-cel.component';
import { ProductViewXCelRoutingModule } from './product-view-x-cel.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductViewXCelRoutingModule,
    TranslateModule,
    FormsModule,
    NgSelectModule,
    ComponentsProductsModule
  ],
  declarations: [
    ProductViewXCelComponent
  ]
})
export class ProductsViewXCelModule {}
