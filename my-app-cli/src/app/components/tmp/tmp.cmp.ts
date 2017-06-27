import { Component, Input, Output, EventEmitter, OnInit, Attribute } from '@angular/core';
@Component({
    selector: 'tmp-cmp',
    template: `<button (click)="emitChange()">Click on me to emit number update and input type change!</button> <br/>
    <p>{{type}}</p>
    <div>
        <button (click)="dec()" title="smaller">-</button>
        <button (click)="inc()" title="bigger">+</button>
        <label [style.font-size.px]="size">FontSize: {{size}}px</label>
    </div>`
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

    @Input()  size: number | string;
    @Output() sizeChange = new EventEmitter<number>();

    dec() { this.resize(-1); }
    inc() { this.resize(+1); }

    resize(delta: number) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    }
}
