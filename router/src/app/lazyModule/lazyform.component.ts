import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'lazy-form-cmp',
    template: `
        <h4>Lazy form is here!</h4>
        <input [formControl]="nameInput" />
    `,
    styles: [``]
})
export class LazyFormComponent {
    nameInput = new FormControl();
}
