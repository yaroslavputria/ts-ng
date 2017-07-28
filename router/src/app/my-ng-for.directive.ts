import { Directive, HostBinding, ElementRef, Renderer2, HostListener, Input, TemplateRef, ViewContainerRef, DoCheck, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[myNgFor]'
})
export class MyNgForDirective implements DoCheck {
    @Input() myNgForOf;
    prevMyNgFor;
    constructor(private el: ElementRef, private template: TemplateRef<any>, private vc: ViewContainerRef) {
    }

    ngAfterViewInit() {
        this.prevMyNgFor = JSON.stringify(this.myNgForOf);
    }

    ngDoCheck() {
        if (JSON.stringify(this.myNgForOf) === this.prevMyNgFor) return;
        console.log('bla');
        this.vc.clear();
        this.myNgForOf.forEach((item) => {
            let view = this.template.createEmbeddedView({$implicit: item});
             this.vc.insert(view);
        });
        this.prevMyNgFor = JSON.stringify(this.myNgForOf);
    }
}
