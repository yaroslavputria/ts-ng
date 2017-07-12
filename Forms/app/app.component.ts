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
            name: 'Ccomponent',
            id: 3
        }
    ];
    currentCmp = 3;
}
