import { Directive, HostBinding, ElementRef, Renderer2, HostListener, Input, TemplateRef, ViewContainerRef, OnDestroy, SimpleChanges, Attribute } from "@angular/core";

@Directive({
    selector: 'double-div'
})
export class DoubleDivDirective implements OnDestroy {
    @Input() divInnerElements; // how to pass it in tag directive ?????
    constructor(private el: ElementRef, private vc: ViewContainerRef, re: Renderer2, @Attribute('texts') texts) {
        console.log(texts);
        const ele = re.createElement('span');
        ele.textContent = 'for first div';
        re.appendChild(this.el.nativeElement.parentElement, ele);
        const ele1 = re.createElement('span');
        ele1.textContent = 'for second div';
        re.setStyle(ele1, 'color', 'red');
        re.appendChild(this.el.nativeElement.parentElement, ele1);
    }

    ngOnDestroy() {
        console.warn('Doublediv directive onDestoy method was called!');
    }
}
