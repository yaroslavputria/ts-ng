import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'b-cmp',
    template: `
        <div class="bordered">
            <b>Pipes stuff:</b><br />
            <label><input type="checkbox" [formControl]="dateFormatCondition"/>Full date</label><br />
            <span>Now is <span style="color:red">{{todayDate | date:dateFormat | uppercase}}</span></span>
            <p>{{paragraphContent | starsAbbreviat:paragraphMaxLength}}</p>
        </div>
        <div class="bordered">
            <b>Structural directives stuff:</b><br />
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

            <div class="bordered">
                <span *myUnless="opositeCond"></span>
            </div>
        </div>
    `,
    styleUrls: ['./b-cmp.component.css']
})
export class BCmpComponent implements OnInit {
    @Output() bla = new EventEmitter();
    todayDate = new Date();
    dateFormatCondition = new FormControl(false);
    get dateFormat() {
        return this.dateFormatCondition.value ? 'fullDate' : 'shortDate';
    }

    paragraphContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis explicabo earum sapiente,
        et enim, saepe itaque unde odio omnis alias magnam veniam doloremque repellat maiores quo temporibus mollitia delectus in.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos id aspernatur voluptas sapiente aut provident,
        similique vitae, cupiditate adipisci modi veniam totam quibusdam voluptates, iste praesentium expedita odit nesciunt repellat?`;
    paragraphMaxLength = 80;
    opositeCond = true;
    constructor() {
        setTimeout(() => {
            this.opositeCond = false;
            this.bla.emit('bla emitted!');
        }, 2000);
        this.bla.subscribe(v => {
            console.log(v, '(child)');
        });
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
