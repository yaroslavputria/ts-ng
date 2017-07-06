import { Component } from '@angular/core';

@Component({
    selector: 'b-cmp',
    template: `
        <div style="border: 1px solid green;">
            <div>I am BComponent</div>
            <ng-content></ng-content>
        </div>
    `
})
export class BComponent {
    constructor() {

    }
}
