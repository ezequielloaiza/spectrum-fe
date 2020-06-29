import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';

@Directive({
  selector: '[min]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDirective, multi: true}]
})
export class MinDirective implements Validator {

  @Input('min') min: number;

  validate(control: AbstractControl): { [key: string]: any } {
    return Validators.min(this.min)(control);
  }
}
