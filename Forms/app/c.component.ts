import { Component, AfterViewInit, ViewChildren, OnInit } from '@angular/core';

import { FormControl, Validators, NgModel, FormGroup, FormArray, NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'c-cmp',
    template: `
        <div>
            <h4>Debounce!</h4>
            <input [formControl]="myControl" debounce/>
        </div>
    `,
    styles: [`
        input {
            width: 300px;
        }
        * {
            margin: 2px;
            padding: 2px;
        }
    `]
})
export class CComponent implements AfterViewInit, OnInit {
    myControl;
    constructor() {
    }

    ngOnInit() {
        this.myControl = new FormControl('initial value');
    }
    ngAfterViewInit() {

    }
}

/*
<input [formControl]="myControl"/>

1) Native Element - events: 'change', 'input'
2) instance of FormControl
3) formControl directive

native input -> formControlDirective -> instance of FormControl

native input <- formControlDirective <- instance of FormControl

valueAccessor

*/