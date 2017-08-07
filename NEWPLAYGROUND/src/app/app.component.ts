import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector } from '@angular/core';
import { AComponent } from './a.component';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h2>Angular is here!</h2>
            <a-cmp [inputData]="someDataForAComp"></a-cmp>
            <div class="for-banner" *ngIf="show">
                <ng-container ad-host #vc></ng-container>
            </div>
            <b-cmp (bla)="logIt($event)"></b-cmp>
        </div>
    `,
    styles: [`
        .for-banner {
            height: 200px;
            width: 200px;
            border: 2px solid green;
        }
    `]
})
export class AppComponent {
    show = true;
    someDataForAComp: any = 'added in AppComponent template';

    @ViewChild('vc', {read: ViewContainerRef}) vc;

    ngAfterViewInit() {
        setTimeout(() => {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AComponent);
            const componentRef = componentFactory.create(this.i);
            componentRef.instance.inputData = 'Dynamically iserted by AppComponent';
            this.vc.insert(componentRef.hostView);
        }, 0);

    }

    logIt(v) {
        console.log(v, '(parent)');
    }

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private i: Injector) {
        setTimeout(() => {
            this.someDataForAComp += ' updated';
        }, 1000);
        setTimeout(() => {
            //this.show = false;
        }, 5000);
    };
}
