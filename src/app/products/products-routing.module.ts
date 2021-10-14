import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductViewEuropaComponent } from './product-view-europa/product-view-europa.component';
import { ProductViewEuclidComponent } from './product-view-euclid/product-view-euclid.component';
import { ProductViewMagicComponent } from './product-view-magicLook/product-view-magic.component';
import { ProductViewBlueComponent } from './product-view-blue/product-view-blue.component';
import { RoleGuard } from '../shared';
import { ProductsListInternalComponent } from './products-lists-internal/products-lists-internal.component';
import { ProductViewFluoStripsComponent } from './product-view-fluo-strips/product-view-fluo-strips.component';
import { ProductViewSpectrumSalineComponent } from './product-view-spectrum-saline/product-view-spectrum-saline.component';
import { ProductViewLenticonComponent } from './product-view-lenticon/product-view-lenticon.component';
import { ProductViewMedmontComponent } from './product-view-medmont/product-view-medmont.component';
import { ProductViewSynergeyesComponent } from './product-view-synergeyes/product-view-synergeyes.component';
import { ProductViewOrionComponent } from './product-view-orion/product-view-orion.component';
import { ConsultationFormComponent } from './consultation-form/consultation-form.component';
import { ProductViewXsbComponent } from './product-view-xsb/product-view-xsb.component';
import { ProductViewMoldedLensesComponent } from './product-view-molded-lenses/product-view-molded-lenses.component';
import { PreOrderComponent } from '../layout/pre-order/pre-order.component';
import { ProductViewSmartlensComponent } from './product-view-smartlens/product-view-smartlens.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivateChild: [RoleGuard],
    children: [
        { path: '', component: ProductsListsComponent, data: { option: 'ProductsList' }  },
        { path: ':idSupplier/internal', component: ProductsListInternalComponent, data: { option: 'ProductsListInternal' }},
        { path: ':id/product-view', component: ProductViewComponent, data: { option: 'ProductsView' }},
        { path: ':id/product-view-europa', component: ProductViewEuropaComponent, data: { option: 'ProductsViewEuropa' }},
        { path: ':id/product-view-euclid', component: ProductViewEuclidComponent, data: { option: 'ProductsViewEuclid' }},
        { path: ':id/product-view-magic', component: ProductViewMagicComponent, data: { option: 'ProductsViewMagic' }},
        { path: ':id/product-view-blue', component: ProductViewBlueComponent, data: { option: 'ProductsViewBlue' }},
        { path: ':id/product-view-fluo-strips', component: ProductViewFluoStripsComponent, data: { option: 'ProductsViewFluoStrips' }},
        { path: ':id/product-view-spectrum-saline', component: ProductViewSpectrumSalineComponent, data: { option: 'ProductsViewSpectrumSaline' }},
        { path: ':id/product-view-lenticon', component: ProductViewLenticonComponent, data: { option: 'ProductsViewLenticon' }},
        { path: ':id/product-view-medmont', component: ProductViewMedmontComponent, data: { option: 'ProductViewMedmontComponent' }},
        { path: ':id/product-view-synergeyes', component: ProductViewSynergeyesComponent, data: { option: 'ProductViewSynergeyesComponent' }},
        { path: ':id/product-view-orion', component: ProductViewOrionComponent, data: { option: 'ProductViewOrionComponent' } },
        { path: ':id/product-view-xsb/:supplierId', component: ProductViewXsbComponent, data: { option: 'ProductViewXsbComponent' }},
        { path: ':id/consultation-form', component: ConsultationFormComponent, data: { option: 'ConsultationFormComponent' } },
        { path: ':id/product-view-molded-lenses', component: ProductViewMoldedLensesComponent, data: { option: 'ProductViewMoldedLenses' }},
        { path: 'pre/order', component: PreOrderComponent, data: { option: 'PreOrder' }},
        { path: ':id/product-view-smartlens', component: ProductViewSmartlensComponent, data: { option: 'ProductsViewSmartlens' }}
        { path: ':id/consultation-form', component: ConsultationFormComponent, data: { option: 'ConsultationFormComponent' }},
        { path: 'pre/order', component: PreOrderComponent, data: { option: 'PreOrder' }},
        { path: ':id/product-view-x-cel', loadChildren: './product-view-x-cel/product-view-x-cel.module#ProductsViewXCelModule',
        data: { option: 'ProductViewXsbComponent' }},

    ] , data: { option: 'ProductsList' }
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
