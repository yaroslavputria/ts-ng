import { Component, ChangeDetectorRef, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'c-cmp',
    template: `
        <div style="border: 1px solid red;">
            <div>I am CComponent <b>Our updating prop is {{prop}}</b></div>
        </div>
    `
})
export class CComponent implements OnChanges {
    @Input('updatingProp') prop;

    constructor(public cd: ChangeDetectorRef) {
        this.cd.detach();
    }

    ngOnChanges(values) {
        this.cd.reattach();
        setTimeout(() => {
            this.cd.detach();
        })
    }
}
