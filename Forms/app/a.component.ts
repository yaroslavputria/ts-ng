import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { FormControl, Validators, NgModel, FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'a-cmp',
    template: `
        <h4>A component is here!</h4>
        <label>Reactive:<br/>
            <input [formControl]="reactiveControl" [ngModel]="reactiveControlModel.name"/>
        </label>
        <br/>
        <label>Template driven:<br/>
            <!--shortcut implementation-->
            <input [(ngModel)]="templDrivenModel.name" #templDrivenInputReference="ngModel"/> <span>Is prestine: {{templDrivenInputReference.control.pristine}}</span>
                    <span>Is touched: {{templDrivenInputReference.control.touched}}</span>
            <!--the same implementation, but there we need to add updateReactiveControlModel method, which sets model value after user's changes in DOM-->
            <!--<input [ngModel]="templDrivenModel.name" (ngModelChange)="updateReactiveControlModel($event)"/>-->
        </label>
    `,
    styles: [`
        input {
            width: 300px;
        }
    `]
})
export class AComponent implements AfterViewInit {
    ////////////////
    // for Reactive
    reactiveControl = new FormControl('', [Validators.required, Validators.maxLength(7)]);
    reactiveControlModel = {
        name: ''
    };

    ////////////////
    // for template driven
    templDrivenModel = {
        name: 'It\'s Template Driven'
    };
    updateReactiveControlModel(v) {
        this.templDrivenModel.name = v;
    }
    @ViewChild(NgModel) ngModelTemplDriven;
    @ViewChild('templDrivenInputReference') ngModelTemplDrivenByTemplReference; //the same element taken in different ways

    ////////////////
    // form group

    form = new FormGroup({
        first: new FormControl('first form control in form group'),
        second: new FormControl('second form control in form group')
    });

    constructor() {
        ////////////////
        // for Reactive
        this.reactiveControl.valueChanges.subscribe((value) => {
            console.log(`reactive input value was changed on "${value}"`);
        });
        this.reactiveControl.statusChanges.subscribe((value) => {
            console.log(`reactive input status was changed on "${value}"`);
        });
        this.reactiveControl.registerOnChange((value) => {// triggered when value is changed in code not in DOM by user
            console.log(`${value} value is setting`);
        });
        this.reactiveControl.registerOnDisabledChange((isDisabled) => { // callback 
            console.log(`disable control property becomes ${isDisabled}`);
        });
        setTimeout(() => {
            console.log(this.reactiveControl.value);// ''
            console.log(this.reactiveControl.status);// 'INVALID'
            console.log(this.reactiveControl.valid);// false
            console.dir(this.reactiveControl);
            this.reactiveControl.setValue('updated');// changing by value
            this.reactiveControl.patchValue('updated twice');// the same as setValue for formControl (not for formGroup)
        }, 500);
        setTimeout(() => {
            this.reactiveControlModel.name = 'It\'s Reactive Control';// changing by model (property binding)
        }, 1000);
        setTimeout(() => {
            this.reactiveControl.disable();
        }, 1500);
        setTimeout(() => {
            this.reactiveControl.enable();
            // it is marked as pristine
            // it is marked as untouched
            // value is set to `Fancy` or null if not specified
            this.reactiveControl.reset('Fancy');
        }, 2000);

        ////////////////
        // for template driven
        setTimeout(() => {
            this.templDrivenModel.name = 'new value for model of template driven input';
        }, 2500);

        
    }

    ngAfterViewInit() {
        ////////////////
        // for template driven
        console.log(this.ngModelTemplDriven === this.ngModelTemplDrivenByTemplReference);// true

        this.ngModelTemplDriven.control.valueChanges.subscribe((value) => {
            console.log(`template driven input value was changed on "${value}"`);
        });
        setTimeout(() => {
            this.ngModelTemplDriven.control.setValue('new value set by control in template driven input');;
        }, 3000);
    }

    
}
