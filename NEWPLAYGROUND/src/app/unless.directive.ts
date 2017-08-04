import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myUnless]'})
export class UnlessDirective {
    hasView: boolean = false;
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
        setTimeout(() => {
            this.templateRef.elementRef.nativeElement.textContent = 'With "myUnless" directive';
        }, 0);
    }
    @Input() set myUnless(condition: boolean) {
        if (!condition && !this.hasView) {
            const view = this.viewContainer.createEmbeddedView(this.templateRef);
            view.rootNodes[0].textContent = 'directive "myUnless" is here';
            // const view1 = this.templateRef.createEmbeddedView(null);
            // view1.rootNodes[0].textContent = 'directive "myUnless" is here';
            // this.viewContainer.insert(view1);
            this.hasView = true;
        } else if (condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
