import { Directive, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { AComponent } from './a.component';

@Directive({
    selector: '[ad-host]',
})

export class AdDirective {
    constructor(public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private i: Injector) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AComponent);
        let componentRef = componentFactory.create(this.i);
        componentRef.instance.inputData = 'Dynamically iserted by AdDirective';
        this.viewContainerRef.insert(componentRef.hostView);
        setTimeout(() => {
            componentRef.instance.inputData += ' updated';
        }, 2000);
    }
}
