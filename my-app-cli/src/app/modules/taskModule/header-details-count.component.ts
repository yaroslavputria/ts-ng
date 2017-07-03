import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'header-details-count',
    template: `
        <span>MyHeaderDetails component was used: {{count}} times</span>`,
    styles: [``]
})
export class HeaderDetailsCount {
    @Input()count: number;//we change it from parent cmp by @ViewChild directly (see task.component)
    ngOnChanges(r) {
        this.count = r;//and can call this method from parent cmp by @ViewChild too (see task.component)
    }
}
