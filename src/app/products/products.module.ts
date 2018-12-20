import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductsListInternalComponent } from './products-lists-internal/products-lists-internal.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductViewEuropaComponent } from './product-view-europa/product-view-europa.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../shared/modules/header/header.module';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule, RoleGuard } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationService } from '../shared/services';
import { ConfirmationBuyComponent } from './modals/confirmation-buy/confirmation-buy.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditProductComponent } from './modals/edit-product/edit-product.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ProductViewEuclidComponent } from './product-view-euclid/product-view-euclid.component';
import { ProductViewMagicComponent } from './product-view-magicLook/product-view-magic.component';
import { ProductViewBlueComponent } from './product-view-blue/product-view-blue.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotificationBalanceComponent } from './modals/notification-balance/notification-balance.component';
import { ConfirmationMagicLookComponent } from './modals/confirmation-buy/confirmation-magic-look/confirmation-magic-look.component';
import { ConfirmationMarkennovyComponent } from './modals/confirmation-buy/confirmation-markennovy/confirmation-markennovy.component';
import { ConfirmationBlueLightComponent } from './modals/confirmation-buy/confirmation-blue-light/confirmation-blue-light.component';
import { EditProductMagicLookComponent } from './modals/edit-product/edit-product-magic-look/edit-product-magic-look.component';
import { ConfirmationEuropaComponent } from './modals/confirmation-buy/confirmation-europa/confirmation-europa.component';
import { ConfirmationEuclidComponent } from './modals/confirmation-buy/confirmation-euclid/confirmation-euclid.component';
import { EditProductEuclidComponent } from './modals/edit-product/edit-product-euclid/edit-product-euclid.component';
import { EditProductEuropaComponent } from './modals/edit-product/edit-product-europa/edit-product-europa.component';
import { ProductViewLenticonComponent } from './product-view-lenticon/product-view-lenticon.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    HeaderModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FileUploadModule,
    NgxSpinnerModule
  ],
  declarations: [
    ProductsComponent,
    ProductsListInternalComponent,
    ProductsListsComponent,
    ProductViewComponent,
    ProductViewEuropaComponent,
    ProductViewEuclidComponent,
    ProductViewMagicComponent,
    ProductViewBlueComponent,
    ConfirmationBuyComponent,
    EditProductComponent,
    NotificationBalanceComponent,
    ConfirmationMagicLookComponent,
    ConfirmationMarkennovyComponent,
    ConfirmationBlueLightComponent,
    EditProductMagicLookComponent,
    ConfirmationEuropaComponent,
    ConfirmationEuclidComponent,
    EditProductEuclidComponent,
    EditProductEuropaComponent,
    ProductViewLenticonComponent
  ],
  entryComponents: [ConfirmationBuyComponent,
                    EditProductComponent,
                    NotificationBalanceComponent,
                    ConfirmationMagicLookComponent,
                    ConfirmationMarkennovyComponent,
                    ConfirmationBlueLightComponent,
                    EditProductMagicLookComponent,
                    ConfirmationEuropaComponent,
                    ConfirmationEuclidComponent,
                    EditProductEuclidComponent,
                    EditProductEuropaComponent
                   ],
  providers: [RoleGuard, AuthorizationService]
})
export class ProductsModule {}
