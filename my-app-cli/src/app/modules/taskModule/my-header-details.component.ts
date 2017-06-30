import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'my-header-details',
    template: `
        <i>{{details}}</i>`,
    styles: [``]
})
export class MyHeaderDetails {
    @Input() details: string;
}
