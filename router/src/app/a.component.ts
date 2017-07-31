import { Component } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'a-comp',
    template: `
        <h2>I am A component</h2>
        <ul>
            <li><a routerLink="tasks">Go to tasks!</a></li>
            <li><a [routerLink]="[{outlets: {primary: 'tasks'}}]">Go to tasks!</a></li>
            <li><a routerLink="tasks/3">Task 3 in nested outlet</a></li>
            <li><a routerLink="tasks/4">Task 4 in nested outlet</a></li>
            <li><a routerLink="lazy">Go to lazy loaded component</a></li>

            <li><a [routerLink]="[{outlets: {primary: 'tasks', details: '4'}}]">Task 4 in separate outlet</a></li>

            <li><a [routerLink]="[{outlets: {anotherdetails: '4', details: '3'}}]">Task 4 in separate outlet and Task 3 in another separate outlet</a></li>
        </ul>
        <router-outlet></router-outlet> <!-- primary outlet-->
        <router-outlet name="details"></router-outlet>
        <router-outlet name="anotherdetails"></router-outlet>
    `,
    styles: ['']
})
export class AComponent {
    constructor(r: Router) {
        setTimeout(() => {
            //r.navigate([{outlets: {primary: 'tasks', details: '4', anotherdetails: '3'}}])
        }, 3000);
        r.events.subscribe(e => {
            if (e instanceof NavigationStart) {
                console.dir(e);
            }
        });
    }

}
