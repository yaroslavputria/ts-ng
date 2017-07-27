import { Component } from '@angular/core';

@Component({
    selector: 'task-cmp',
    template: `<div class="task">I am TaskComponent</div>`,
    styles: [`
        .task {
            height: 100px;
            width: 100px;
            border: 1px solid blue;
        }
    `]
})
export class TaskComponent {

}