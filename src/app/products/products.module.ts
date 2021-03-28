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
import { ProductViewFluoStripsComponent } from './product-view-fluo-strips/product-view-fluo-strips.component';
import { ProductViewSpectrumSalineComponent } from './product-view-spectrum-saline/product-view-spectrum-saline.component';
// tslint:disable-next-line:max-line-length
import { ConfirmationSpectrumSalineComponent } from './modals/confirmation-buy/confirmation-spectrum-saline/confirmation-spectrum-saline.component';
import { ProductViewLenticonComponent } from './product-view-lenticon/product-view-lenticon.component';
import { ConfirmationLenticonComponent } from './modals/confirmation-buy/confirmation-lenticon/confirmation-lenticon.component';
import { EditProductSpectrumSalineComponent } from './modals/edit-product/edit-product-spectrum-saline/edit-product-spectrum-saline.component';
import { ProductViewMedmontComponent } from './product-view-medmont/product-view-medmont.component';
import { EditProductMedmontComponent } from './modals/edit-product/edit-product-medmont/edit-product-medmont.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ProductViewSynergeyesComponent } from './product-view-synergeyes/product-view-synergeyes.component';
import { ConfirmationSynergeyesComponent } from './modals/confirmation-buy/confirmation-synergeyes/confirmation-synergeyes.component';
import { ProductViewOrionComponent } from './product-view-orion/product-view-orion.component';
import { ConfirmationOrionComponent } from './modals/confirmation-buy/confirmation-orion/confirmation-orion.component';
import { CommonsModule } from '../commons.module';
import { ConsultationFormComponent } from './consultation-form/consultation-form.component';
import { ProductViewXsbComponent } from './product-view-xsb/product-view-xsb.component';

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
    NgxSpinnerModule,
    CurrencyMaskModule,
    CommonsModule
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
    ProductViewFluoStripsComponent,
    ProductViewSpectrumSalineComponent,
    ConfirmationSpectrumSalineComponent,
    ProductViewLenticonComponent,
    ConfirmationLenticonComponent,
    EditProductSpectrumSalineComponent,
    ProductViewMedmontComponent,
    EditProductMedmontComponent,
    ProductViewSynergeyesComponent,
    ConfirmationSynergeyesComponent,
    ProductViewOrionComponent,
    ConfirmationOrionComponent,
    ConsultationFormComponent,
    ProductViewXsbComponent
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
                    EditProductEuropaComponent,
                    ConfirmationSpectrumSalineComponent,
                    ConfirmationLenticonComponent,
                    EditProductSpectrumSalineComponent,
                    EditProductMedmontComponent,
                    ConfirmationSynergeyesComponent,
                    ConfirmationOrionComponent
                   ],
  providers: [RoleGuard, AuthorizationService]
})
export class ProductsModule {}
