import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    name = 'Angular';
    cmps = [
        {
            name: 'Acomponent',
            id: 1
        },
        {
            name: 'Bcomponent',
            id: 2
        },
        {
            name: 'CComponent with debounce',
            id: 3
        },
        {
            name: 'TaskListComponent',
            id: 4
        }
    ];
    currentCmp = 4;
}
