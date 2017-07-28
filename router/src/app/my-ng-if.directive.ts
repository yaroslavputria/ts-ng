import { Directive, HostBinding, ElementRef, Renderer2, HostListener, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[myNgIf]'
})
export class MyNgIfDirective {
    @Input() myNgIf;
    viewRef
    constructor(private el: ElementRef, private template: TemplateRef<any>, private vc: ViewContainerRef) {
        this.viewRef = this.template.createEmbeddedView({/*bla: 'my own context'*/ $implicit: 'from context $implicit'});
    }
    
    ngOnChanges() {
        if (this.myNgIf) {
            //this.vc.createEmbeddedView(this.template);
            this.vc.insert(this.viewRef);
        } else {
            //this.vc.remove();
            this.vc.detach();
        }
    }
}
