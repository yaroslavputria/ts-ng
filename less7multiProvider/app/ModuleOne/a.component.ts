import { Component, Inject } from '@angular/core';

@Component({
    selector: 'a-cmp-one',
    template: `
        <div style="border: 1px solid blue;">
            <div>I am A Component module One</div>
            <ul>
                <li *ngFor="let item of items">{{item}}</li>
            </ul>
        </div>
    `,
    providers: [
        { provide: 'common-token', useValue: `from module one component "a-cmp-one", and it rewrote multi-provider`, multi: true }//provider in component can't be "multi", it always rewrites provider
    ]
})
export class AComponent {
    constructor(@Inject('common-token') public items) {

    }
}
