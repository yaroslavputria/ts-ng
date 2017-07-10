import { Component } from '@angular/core';

@Component({
    selector: 'b-cmp',
    template: `
        <div style="border: 1px solid green;">
            <div>I am BComponent. I am {{status}}!</div>
            <ng-content></ng-content>
        </div>
    `
})
export class BComponent {
    status = 'not updated';
    constructor() {
        setTimeout(() => {
            this.status = 'updated';
        }, 3000);
    }
}
