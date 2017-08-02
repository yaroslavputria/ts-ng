import { Component, ViewContainerRef, ViewChild, ChangeDetectorRef, Compiler, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SystemJsNgModuleLoader, NgModuleFactoryLoader, NgModuleRef, NgModule } from '@angular/core';

import { LazyFormComponent } from './lazyModule/lazyform.component';

declare var System;

@Component({
    selector: 'c-cmp',
    template: `
        <div style="border: 1px solid blue">
            <h2>I am CComponent with lazy loaded form component!</h2>
            <label><input [formControl]="checkBox" type="checkbox"/>Remove without saving</label><br />
            <button (click)="toggleLazyFrom()">Toggle lazy form</button>
            <ng-container #lazyFormViewCont></ng-container><br />
            <ng-container #superDynamic></ng-container>
            <!--<ng-container [ngTemplateOutlet]="tpl"></ng-container>
            <ng-container *ngComponentOutlet="ColorComponent"></ng-container>-->
        </div>
    `,
    styles: [''],
    providers: [
        {
            provide: NgModuleFactoryLoader,
            useClass: SystemJsNgModuleLoader
        }
    ]
})
export class CComponent {
    constructor(private jit: Compiler, private injector: Injector, private loader: NgModuleFactoryLoader, private _m: NgModuleRef<any>) {
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
        // System.import('app/lazyModule/lazy.module.js').then((module) => {
        //     const klass = module.LazyModule;
        //     const factory = this.jit.compileModuleSync(klass);
        //     const moduleRef = factory.create(this.injector);
        //     const lazyCompFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(klass.components[1]);
        //     const lazyComptRef = lazyCompFactory.create(this.injector);
        //     this.view = lazyComptRef.hostView;
        //     //this.view = this.vc.createComponent(lazyCompFactory).hostView;
        // });

        const factory = this.loader.load('app/lazyModule/lazy.module.js#LazyModule').then((factory) => {
            const moduleRef = factory.create(this.injector);
            const lazyCompFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(LazyFormComponent);
            const lazyComptRef = lazyCompFactory.create(this.injector);
            this.view = lazyComptRef.hostView;
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
            setTimeout(() => { // because module imported asynchronously // but better way of course is promise chaining :)
                this.vc.insert(this.view);
            }, 100);
        }
    }

    @ViewChild('superDynamic', {read: ViewContainerRef}) vcForSuperDynamic;
    
    cmpRef = null;

    ngAfterViewInit() {
        System.import('app/lazyModule/lazy.module.js').then((module) => {
            this.jit.compileModuleAndAllComponentsAsync(module.LazyModule)
            .then((compiled) => {
                const m = compiled.ngModuleFactory.create(this.injector);
                const factory = compiled.componentFactories[0];
                const cmp = factory.create(this._injector, [], null, m);
            })
        })

        ////--------------------------

        const template = '<span class="bordered">generated on the fly: {{name}}</span>';
        const tmpCmp = Component({template: template, styles: ['.bordered {border: 1px solid red}']})(class {});
        const tmpModule = NgModule({declarations: [tmpCmp]})(class {});
        this.jit.compileModuleAndAllComponentsAsync(tmpModule)
            .then((factories) => {
                const f = factories.componentFactories[0];
                this.cmpRef = f.create(this.injector, [], null, this._m);
                cmpRef.instance.name = 'dynamic';
                this.vcForSuperDynamic.insert(cmpRef.hostView);
            })
    }

    ngOnDestroy() {
        if(this.cmpRef) {
            this.cmpRef.destroy();
        }
    }

}
