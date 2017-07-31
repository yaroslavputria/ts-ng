import { Component } from '@angular/core';

@Component({
    selector: 'lazy-cmp',
    template: `<span class="lazy">Lazy-lazy component</span>`,
    styles: [`.lazy {font-size: 40px; color: red;}`]
})
export class LazyComponent {

}
