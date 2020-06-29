import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';

@Directive({
  selector: '[max]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true}]
})
export class MaxDirective implements Validator {

  @Input('max') max: number;

  validate(control: AbstractControl): { [key: string]: any } {
    return Validators.max(this.max)(control);
  }
}
