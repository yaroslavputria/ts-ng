import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/debounce';

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
    debounceChange;
    constructor(private el: ElementRef, private renderer: Renderer2) {
        // renderer.listen(el.nativeElement, 'input', (event) => {
        //     this.debounceChange(event.target.value);
        // });
    }

    writeValue(v) {
        this.renderer.setProperty(this.el.nativeElement, 'value', v);
    }

    forObservable;

    // debounceObservable = new Observable(observer => {
    //     let d = true;
    //     renderer.listen(el.nativeElement, 'input', (event) => {
    //         if (d) {
    //             d = false;
    //             observer.next(event.target.value);
    //             setTimeout(() => {
    //                 d = true;
    //             }, 1000);
    //         };
    //     });
    // });

    // subscribtion = this.debounceObservable.subscribe(v => {
    //     console.log('function was called');
    //     this.forObservable(v);
    // });

    debounceObservableSubscrb = Observable.fromEvent(this.el.nativeElement, 'input')
        .debounce(() => Observable.interval(1000))
        .subscribe(v => this.forObservable(v.target.value));
    

    registerOnChange(fn) {
        this.forObservable = fn;

        // let d = true;
        // this.debounceChange = function(v) {
        //     if (d) {
        //         d = false;
        //         console.log('function was called');
        //         fn(v);
        //         setTimeout(() => {
        //             d = true;
        //         }, 1000);
        //     };
        // }
    }

    registerOnTouched(fn) {
    }

}
