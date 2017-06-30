import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'header-details-count',
    template: `
        <span>MyHeaderDetails component was used: {{count}} times</span>`,
    styles: [``]
})
export class HeaderDetailsCount {
    @Input()count: number;
}
