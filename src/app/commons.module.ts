import { NgModule } from '@angular/core';
import { MinDirective } from './shared/directives/min.directive';
import { MaxDirective } from './shared/directives/max.directive';
import { ModuloDirective } from './shared/directives/modulo.directive';

@NgModule({
  declarations: [ MinDirective, MaxDirective, ModuloDirective],
  exports: [ MinDirective, MaxDirective, ModuloDirective]
  })
  export class CommonsModule { }
