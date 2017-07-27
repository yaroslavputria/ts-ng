import { Component } from '@angular/core';
import { ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'tasks-cmp',
    template: `
        <div class="task-list">
            <span>I am TasksComponent</span>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .task-list {
            height: 400px;
            width: 160px;
            border: 1px solid green;
            padding: 5px;
        }
    `]
})
export class TasksComponent {
    constructor (private route: ActivatedRoute) {
        setTimeout(() => {
            console.dir(this.route.snapshot.data);
        }, 5000);
    }

}