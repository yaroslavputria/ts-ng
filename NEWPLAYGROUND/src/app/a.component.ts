import { Component, Input, AfterViewInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'a-cmp',
    template: `
        <div class="bordered">
            <b>A component</b>
            <div>{{inputData}}</div>
        </div>
    `,
    styles: [`

    `]
})
export class AComponent implements AfterViewInit, OnChanges {
    @Input() inputData;

    ngAfterViewInit() {
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    }
}
