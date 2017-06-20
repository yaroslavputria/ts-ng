import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
    selector: 'tmp-cmp',
    template: `<button (click)="emitChange()">Click on me to emit number update!</button>`
})
export class TmpCmp {
    _n: number;
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
