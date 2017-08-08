import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector } from '@angular/core';
import { AComponent } from './a.component';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h2>Angular is here!</h2>
            <a [routerLink]="'animations'">Go to animations</a>
            <br />
            <a [routerLink]="'forms'">Go to forms stuff</a>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
    `]
})
export class AppComponent {
}
