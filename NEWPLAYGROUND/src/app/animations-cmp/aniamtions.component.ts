import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'anim-cmp',
    template: `
        <div [@flyInOut]="listState">
            <ul>
                <li *ngFor="let item of items" class="hand" [@myAnimState]="item.state" (click)="toggleState(item)">{{item.name}}</li>
            </ul>
        </div>
    `,
    styles: [`.hand:hover {cursor: pointer;}`],
    animations: [
        trigger('myAnimState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)',
                color: 'green'
            })),
            state('*', style({
                color: 'blue'
            })),
            //transition('inactive => active', animate('100ms ease-in')),
            //transition('active => inactive, inactive => active', animate('100ms ease-out'))
            transition('active <=> inactive', animate('100ms ease-out')),
            //transition('active => *', animate('100ms ease-out'))
        ]),
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            state('out', style({transform: 'translateX(-50%)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
})
export class AnimationsComponent {
    listState = 'out';
    constructor() {
        setTimeout(() => {
            this.listState = 'in';
        }, 3000);
    }
    toggleState(item) {
        item.state = (item.state === 'inactive') ? 'active' : 'inactive';
    }
    items = [
        {state: 'inactive', name: 'Table'},
        {state: 'active', name: 'Desktop'},
        {state: 'inactive', name: 'Chair'}
    ]
}
