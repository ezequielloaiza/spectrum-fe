import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsProductsModule } from '../components/components-products.module';
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
