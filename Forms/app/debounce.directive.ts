import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
    selector: '[debounce]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DebounceDirective,
            multi: true
        }
    ]
})
export class DebounceDirective implements ControlValueAccessor {
    constructor(private el: ElementRef, private renderer: Renderer2) {

    }

    writeValue(v) {
        this.renderer.setProperty(this.el.nativeElement, 'value', v);
    }
    registerOnChange(fn) {

    }
    registerOnTouched(fn) {

    }

}
