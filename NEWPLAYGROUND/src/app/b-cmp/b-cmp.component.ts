import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'b-cmp',
    template: `
        <div class="bordered">
            <ul> Heroes:
                <li *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
                    ({{i}}) {{hero.name}}
                </li>

                <li style="color:red">here commented deprecated implementation way with 'template' directive</li>
                <!--<li template="ngFor let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
                    ({{i}}) {{hero.name}}
                </li>-->

                <ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
                    <li [class.odd]="odd">({{i}}) {{hero.name}}</li>
                </ng-template>
            </ul>
        </div>
        <div class="bordered">
            <span *myUnless="opositeCond"></span>
        </div>
    `,
    styleUrls: ['./b-cmp.component.css']
})
export class BCmpComponent implements OnInit {
    opositeCond = true;
    constructor() {
        setTimeout(() => {
            this.opositeCond = false;
        }, 2000);
    }

    ngOnInit() {
    }

    heroes = [
        {
            name: 'Superman',
            odd: true
        },
        {
            name: 'Batman',
            odd: false
        },
        {
            name: 'Catwoman',
            odd: true
        }
    ];
}
