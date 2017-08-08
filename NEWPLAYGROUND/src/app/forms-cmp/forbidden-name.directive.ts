import { Directive, Input } from '@angular/core';

import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? {'forbiddenName': {value: control.value}} : null;
        };
}

@Directive({
    selector: '[forbiddenName]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true }
    ]
})
export class ForbiddenNameDirective implements Validator {
    @Input() forbiddenName;
    validate(control: AbstractControl) {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
    }
}
