/*

When this function triggered for a particular view it does the following operations in the specified order:

    1. updates input properties on a child component/directive instance
    2. runs change detection for the embedded views (repeats the steps in the list)
    3. updates child view change detection state (part of change detection strategy implementation)
    4. calls OnChanges lifecycle hook on a child component if bindings changed
    5. calls OnInit and ngDoCheck on a child component (OnInit is called only during first check)
    6. updates ContentChildren query list
    7. calls AfterContentInit and AfterContentChecked lifecycle hooks on child component instance
        (AfterContentInit is called only during first check)
    8. calls OnDestroy if the child/parent component is destroyed
    9. updates DOM for the current view if properties on current view component instance changed
    10. runs change detection for a child view (repeats the steps in this list)
    11. updates ViewChildren query list
    12. calls AfterViewInit and AfterViewChecked lifecycle hooks on child component instance
        (AfterViewInit is called only during first check)
    13. disables checks for the current view (part of change detection strategy implementation)
    sets FirstCheck to false
*/
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { Input, ViewChildren, ContentChildren, ChangeDetectorRef } from '@angular/core';
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
            <b-cmp><c-cmp [updatingProp]="prop"></c-cmp></b-cmp>
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

    prop = '"not updated"';

    constructor(public cd: ChangeDetectorRef) {

        this.cd.detach(); // disables view update and its children views update
        this.cd.reattach(); // enables view and its children checks (see c.component)
        this.cd.markForCheck(); // enables checks for all parent components up too root cmp
        //this.cd.detectChanges(); // runs change detaction for current component and its childrens
        //this.cd.checkNoChanges(); // throws exception if it finds a changed binding or determines that
                                    // DOM should be updated (runs 1, 7, 8 operations)

        setTimeout(() => {
            this.cd.checkNoChanges(); // doesnt throw error
            this.prop = '"already updated"';
            try {
                this.cd.checkNoChanges(); // throws error after "prop" change
            } catch(err) {
                console.error(err.message);
            };
        }, 2500);
    }

    ngOnChanges(changes: SimpleChanges) {// is triggered automatically after '@Input' variables changes in parent cmp
        for (let propName in changes) {
            console.log(changes[propName].currentValue, changes[propName].previousValue, changes[propName].firstChange, changes[propName].isFirstChange);
        }
        this.cd.detectChanges();
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
    constructor(private el: ElementRef, public cd: ChangeDetectorRef) {

    }
    ngOnInit() {
        console.log(`adir-spy was inited on ${this.el.nativeElement}`);
        setTimeout(() => {
            this.el.nativeElement.removeAttribute('adir-spy');
            this.cd.checkNoChanges();
        }, 3000);
    }
    ngOnDestroy() {
        console.log(`adir-spy was removed from ${this.el.nativeElement}`);
        debugger;
    }
}

