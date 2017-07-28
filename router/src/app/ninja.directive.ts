import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from "@angular/core";
import { AppComponent } from './app.component';

@Directive({
    selector: '[ninja]'
})
export class NinjaDirective {
    @HostListener('click', ['$event'])
    @HostListener('mouseover', ['$event.target'])
        onClick(e) {
            console.log(this.el);
            console.log(e);
            this.parent.name = 'changed from ninja directive by HostListener click';
        }

    @HostListener('window:click')
        clickOnWindow() {
            console.log('window was clicked');
        }

    @HostBinding('textContent') elTextContent = 'div with \'ninja\' directive, click or hover me!';

    constructor(private el: ElementRef, private renderer: Renderer2, private parent: AppComponent) {
        this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
        this.renderer.listen(this.el.nativeElement, 'click', (e) => {
            this.parent.name = 'new update'; // if parent component had "changeDetection: ChangeDetectionStrategy.OnPush" we would have to trigger change detection manually
            console.log('click listener added by Renderer2');
        });
    }

}
