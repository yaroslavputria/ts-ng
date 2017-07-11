import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { FormControl, Validators, NgModel, FormGroup, NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'b-cmp',
    template: `
        <h4>B component is here!</h4>
        <h5>Reactive form</h5>
        <form [formGroup]="myFormGroup">
            <input type="text" formControlName="second"/> <!-- without input binding set as string -->
            <input type="text" [formControlName]="'first'"/> <!-- pass string in input binding -->
        </form>

        <h5>Template driven form</h5>
        <form>
            <input name="bla" ngModel/>
            <input name="ku" ngModel/>
        </form>
    `,
    styles: [`
        input {
            width: 300px;
        }
    `]
})
export class BComponent implements AfterViewInit {
    myFormGroup = new FormGroup({
        first: new FormControl('first form control in form group', [Validators.required]),
        second: new FormControl('second form control in form group', [Validators.maxLength(2)])
    });

    @ViewChild(NgForm) secondFormGroup; // it took second form becouse of: "... selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]', ..."

    constructor() {
        console.log(this.myFormGroup.value); // {first: "first form control in form group", second: "second form control in form group"}
        setTimeout(() => {
            this.myFormGroup.setValue({first: 'new value1', second: 'new value22'});// updates whole form group, in there is no passed some control - throws error
            console.log(this.myFormGroup.value);// {first: "new value1", second: "new value22"}
            this.myFormGroup.patchValue({noControl: 'bla bla', second: 'blablabla'});// updates only existing controls without throwing errors if some control missed or added extra
            console.log(this.myFormGroup.value);// {first: "new value1", second: "blablabla"}
        }, 1000);
        setTimeout(() => {
            console.log(this.myFormGroup.status);// INVALID - 'second' control has validator 'maxLength'
        }, 2000);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.secondFormGroup.setValue({bla: 'for bla', ku: 'for ku'});
        }, 3000);
    }

    
}
