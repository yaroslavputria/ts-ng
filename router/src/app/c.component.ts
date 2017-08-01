import { Component, ViewContainerRef, ViewChild, ChangeDetectorRef, Compiler, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';

declare var System;

@Component({
    selector: 'c-cmp',
    template: `
        <div style="border: 1px solid blue">
            <h2>I am CComponent with lazy loaded form component!</h2>
            <label><input [formControl]="checkBox" type="checkbox"/>Remove without saving</label><br />
            <button (click)="toggleLazyFrom()">Toggle lazy form</button>
            <ng-container #lazyFormViewCont></ng-container>
            <!--<ng-container [ngTemplateOutlet]="tpl"></ng-container>
            <ng-container *ngComponentOutlet="ColorComponent"></ng-container>-->
        </div>
    `,
    styles: ['']
})
export class CComponent {
    constructor(private jit: Compiler, private injector: Injector) {
    }

    checkBox = new FormControl(true);

    @ViewChild('lazyFormViewCont', {read: ViewContainerRef}) vc;

    view = null;
    /*
    class ViewContainerRef {
        ...
        clear() : void
        insert(viewRef: ViewRef, index?: number) : ViewRef
        get(index: number) : ViewRef
        indexOf(viewRef: ViewRef) : number
        detach(index?: number) : ViewRef
        move(viewRef: ViewRef, currentIndex: number) : ViewRef
        ...
        element: ElementRef
        length: number

        createComponent(componentFactory...): ComponentRef<C>
        createEmbeddedView(templateRef...): EmbeddedViewRef<C>
    }
    */
    importModuleAndCmp() {
        System.import('app/lazyModule/lazy.module.js').then((module) => {
            const klass = module.LazyModule;
            const factory = this.jit.compileModuleSync(klass);
            const moduleRef = factory.create(this.injector);
            const lazyCompFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(klass.components[1]);
            const lazyComptRef = lazyCompFactory.create(this.injector);
            this.view = lazyComptRef.hostView;
            //this.view = this.vc.createComponent(lazyCompFactory).hostView;
        });
    }

    toggleLazyFrom() {
        if (this.vc.length === 1) {
            if (this.checkBox.value) {
                this.vc.remove();
                this.view = null
            } else {
                this.vc.detach();
            }
        } else {
            if (this.view === null) this.importModuleAndCmp();
            setTimeout(() => { // because module imported asynchronously
                this.vc.insert(this.view);
            }, 0);
        }
    }

}
