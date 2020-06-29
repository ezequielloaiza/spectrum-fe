import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';

@Directive({
  selector: '[appModulo][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: ModuloDirective, multi: true}]
})
export class ModuloDirective implements Validator {

  @Input() appModulo: number;
  /** This directive is for floating numbers.
   * For more info: https://stackoverflow.com/questions/21915067/determine-if-x-is-divisible-evenly-by-y-in-php* */
  validate(control: AbstractControl): { [key: string]: any } {
    return (Math.abs((control.value / this.appModulo) - Math.round(control.value / this.appModulo)) < 0.0001) ? null : {'appModulo': true};
  }
}
