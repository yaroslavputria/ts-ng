import { Directive, ViewContainerRef, ComponentFactoryResolver, Injector, ElementRef, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { AComponent } from './a.component';

@Directive({
    selector: '[ad-host]',
})

export class AdDirective implements OnDestroy {
    l1;
    l2;
    constructor(private viewContainerRef: ViewContainerRef,
            private componentFactoryResolver: ComponentFactoryResolver,
            private i: Injector,
            private el: ElementRef,
            private re: Renderer2) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AComponent);
        let componentRef = componentFactory.create(this.i);
        componentRef.instance.inputData = 'Dynamically iserted by AdDirective';
        this.viewContainerRef.insert(componentRef.hostView);
        setTimeout(() => {
            componentRef.instance.inputData += ' updated';
        }, 2000);

        this.l1 = this.re.listen(this.el.nativeElement.parentElement, 'mouseenter', (e) => {
            this.re.addClass(this.el.nativeElement.parentElement, 'highlighted');
        });
        this.l2 = this.re.listen(this.el.nativeElement.parentElement, 'mouseleave', (e) => {
            this.re.removeClass(this.el.nativeElement.parentElement, 'highlighted');
        });
    }
    ngOnDestroy() {
        this.l1();
        this.l2();
        console.log('destroyed!');
    }
}
