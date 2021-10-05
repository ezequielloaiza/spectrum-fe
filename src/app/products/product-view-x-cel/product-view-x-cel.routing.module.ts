import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewXCelComponent } from './product-view-x-cel.component';

const routes: Routes = [
  {
    path: '', component: ProductViewXCelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductViewXCelRoutingModule { }
