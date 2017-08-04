import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector } from '@angular/core';
import { AComponent } from './a.component';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h2>Angular is here!</h2>
            <!--<a-cmp [inputData]="someDataForAComp"></a-cmp>-->
            <div class="for-banner">
                <ng-container ad-host #vc></ng-container>
            </div>
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
    someDataForAComp: any = 5;

    @ViewChild('vc', {read: ViewContainerRef}) vc;

    ngAfterViewInit() {
        setTimeout(() => {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AComponent);
            const componentRef = componentFactory.create(this.i);
            componentRef.instance.inputData = 'Dynamically iserted by AppComponent';
            this.vc.insert(componentRef.hostView);
        }, 0);

    }

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private i: Injector) {
        setTimeout(() => {
            this.someDataForAComp = 1;
        }, 1000);
    };
}
