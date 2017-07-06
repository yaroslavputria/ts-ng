import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { Input, ViewChildren, ContentChildren } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

import { BComponent } from './b.component';
import { CComponent } from './c.component';

@Component({
    selector: 'a-cmp',
    template: `
        <div>
            <p adir-spy>I am AComponent!</p>
            <input type="text" [(ngModel)]="prop1ForNgOnChanges" />
            <input type="text" [(ngModel)]="prop2ForNgOnChanges" />
            <b-cmp><c-cmp></c-cmp></b-cmp>
            <b-cmp></b-cmp>
        </div>
    `,
    styles: [`
        div {
            border: 1px solid blue;
        }
    `]
})
export class AComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input('p1') prop1ForNgOnChanges;
    @Input('p2') prop2ForNgOnChanges;

    ngOnChanges(changes: SimpleChanges) {//is triggered automatically after '@Input' variables changes in parent cmp
        for (let propName in changes) {
            console.log(changes[propName].currentValue, changes[propName].previousValue, changes[propName].firstChange, changes[propName].isFirstChange);
        }
    }

    ngOnInit() {

    }

    ngDoCheck() {//Detect and act upon changes that Angular can't or won't detect on its own.

    }

    @ContentChildren(CComponent) CCmps;

    ngAfterContentInit() {//A component-only hook. Called once after the first ngDoCheck().
        this.CCmps;
    }

    ngAfterContentChecked() {//A component-only hook. Called after the ngAfterContentInit() and every subsequent ngDoCheck().
        this.CCmps;
        //debugger
    }

    @ViewChildren(BComponent) BCmps;

    ngAfterViewInit() {//A component-only hook.
        this.BCmps;
    }

    ngAfterViewChecked() {//A component-only hook.
        this.BCmps;
        //debugger
    }

    ngOnDestroy() {

    }
}

@Directive({
    selector: '[adir-spy]'
})
export class ADirective implements OnInit, OnDestroy {
    constructor(private el: ElementRef) {

    }
    ngOnInit() {
        console.log(`adir-spy was inited on ${this.el.nativeElement}`);
        setTimeout(() => {
            this.el.nativeElement.removeAttribute('adir-spy');
        }, 3000);
    }
    ngOnDestroy() {
        console.log(`adir-spy was removed from ${this.el.nativeElement}`);
    }
}
