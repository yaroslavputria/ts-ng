import { Component, Input, Output, EventEmitter, OnInit, Attribute } from '@angular/core';
@Component({
    selector: 'tmp-cmp',
    template: `<button (click)="emitChange()">Click on me to emit number update!</button> <br/>
    <p>{{type}}</p>`
})
export class TmpCmp {
    _n: number;

    constructor(@Attribute('type') public type: string) {

    }
    @Input('startedNumber') set n(value) {
        this._n = value;
    }

    ngOnInit(): void {
        setInterval(() => {
            this._n++;
        }, 1000);
    }

    @Output('triggeredupdate')
        ee = new EventEmitter;

    emitChange() {
        this.ee.emit(this._n);
    }
}
