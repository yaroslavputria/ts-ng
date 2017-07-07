import { Component, Inject } from '@angular/core';

@Component({
    selector: 'a-cmp-two',
    template: `
        <div style="border: 1px solid green;">
            <div>I am A Component module Two</div>
            <ul>
                <li *ngFor="let item of items">{{item}}</li>
            </ul>
        </div>
    `
})
export class AComponent {
    constructor(@Inject('common-token') public items) {

    }
}
