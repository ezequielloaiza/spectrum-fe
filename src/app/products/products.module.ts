import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductViewEuropaComponent } from './product-view-europa/product-view-europa.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../shared/modules/header/header.module';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule, RoleGuard } from '../shared';
import { FormsModule } from '@angular/forms';
import { AuthorizationService } from '../shared/services';
import { ConfirmationBuyComponent } from './modals/confirmation-buy/confirmation-buy.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    HeaderModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    FormsModule,
    NgSelectModule
  ],
  declarations: [ProductsComponent, ProductsListsComponent, ProductViewComponent, ProductViewEuropaComponent, ConfirmationBuyComponent],
  entryComponents: [ConfirmationBuyComponent],
  providers: [
    RoleGuard,
    AuthorizationService
  ]
})
export class ProductsModule { }
