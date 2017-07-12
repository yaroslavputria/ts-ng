import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { FormControl, Validators, NgModel, FormGroup, FormArray, NgForm, FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'b-cmp',
    template: `
        <h4>B component is here!</h4>
        <h5>Reactive FormGroup</h5>
        <form [formGroup]="reactiveFormGroup" (ngSubmit)="onSubmit(f)" #f="ngForm">
            <input type="text" formControlName="second"/> <!-- without input binding set as string -->
            <input type="text" [formControlName]="'first'"/> <!-- pass string in input binding -->
            <br/><button type="submit">Submit</button>
        </form>

        <h5>Template driven FormGroup</h5>
        <form>
            <input name="bla" minlength="2" ngModel/>
            <input name="ku" required pattern="but angular is cool" ngModel/>
        </form>

        <h5>Reactive FormArray (also nested)</h5>
        <form [formGroup]="myFormNestedWithArray">
            <div formArrayName="myFormControlArrayKey">
                <!--<input type="text" *ngFor="let item of myFormArray.controls; let i = index" formControlName="{{i}}">-->
                <input type="text" *ngFor="let item of myFormNestedWithArray.controls.myFormControlArrayKey.controls; let i = index" [formControlName]="i"> <!-- the same -->
            </div>
            <input formControlName="lastInput"/>
        </form>

        <h5>Nested template driven form</h5>
        <form #nestedForm="ngForm" style="border: 1px solid blue">
            <input name="name" NgModel/>
            <div ngModelGroup="account" style="border: 1px solid green">
                <input name="email" ngModel/>
                <input name="confirm" ngModel/>
            </div>
        </form>

        <h5>Nested reactive form</h5>
        <form [formGroup]="nestedReactiveForm" style="border: 1px solid blue">
            <input formControlName="name"/>
            <div formGroupName="account" style="border: 1px solid green">
                <input formControlName="email"/>
                <input formControlName="confirm"/>
            </div>
        </form>

        <h5>Reactive form group by FormBuilder</h5>
        <form [formGroup]="user" style="border: 1px solid blue">
            <input formControlName="name"/>
            <div formGroupName="account" style="border: 1px solid green">
                <input formControlName="email"/>
                <input formControlName="confirm"/>
            </div>
        </form>
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
export class BComponent implements AfterViewInit {
    //reactive form group
    reactiveFormGroup = new FormGroup({
        first: new FormControl('first form control in form group', [Validators.required]),
        second: new FormControl('second form control in form group', [Validators.maxLength(2)])
    });
    onSubmit(ngFormGroupDirective) {
        console.log(ngFormGroupDirective.form === this.reactiveFormGroup);// true
    }

    //Template driven form group
    @ViewChild(NgForm) templDrivenFormGroup; // it took second form becouse of: "... selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]', ..."

    //reactive form array
    myFormArray = new FormArray([new FormControl(1), new FormControl(2)]);
    myFormNestedWithArray = new FormGroup({
        'myFormControlArrayKey': this.myFormArray,
        'lastInput': new FormControl('wtf, why am I last?')
    });

    //Template driven nested form group
    @ViewChild('nestedForm') nestedForm: NgForm;// get template driven form (NgForm) by reference variable
    // ngForm -> '#nestedForm'
    // ngModel -> 'name'
    // ngModelGroup -> 'account'
    //              -> ngModel -> 'email'
    //              -> ngModel -> 'confirm'

    //Reactive nested form group
    nestedReactiveForm = new FormGroup({
        'name': new FormControl('John'),
        'account': new FormGroup({
            'email': new FormControl('john.smith@gmail.com'),
            'confirm': new FormControl('john.smith@gmail.com')
        })
    });

    //form group by FormBuilder
    user;
    
    constructor(private fb: FormBuilder) {
        this.reactiveFormGroup.valueChanges.subscribe(v => console.log('reactiveFormGroup', v));
        console.log(this.reactiveFormGroup.value); // {first: "first form control in form group", second: "second form control in form group"}
        setTimeout(() => {
            this.reactiveFormGroup.setValue({first: 'new value1', second: 'new value22'});// updates whole form group, in there is no passed some control - throws error
            console.log(this.reactiveFormGroup.value);// {first: "new value1", second: "new value22"}
            this.reactiveFormGroup.patchValue({noControl: 'bla bla', second: 'blablabla'});// updates only existing controls without throwing errors if some control missed or added extra
            console.log(this.reactiveFormGroup.value);// {first: "new value1", second: "blablabla"}
        }, 1000);
        setTimeout(() => {
            console.log(this.reactiveFormGroup.status);// INVALID - 'second' control has validator 'maxLength'
            this.reactiveFormGroup.reset({first: 'new value1'});
            console.log(this.reactiveFormGroup.pristine);//true - reset method sets formGroup and its children pristine=true
        }, 2000);

        setTimeout(() => {
            this.myFormArray.setValue([5, 6]);
        }, 4000);

        this.user = this.fb.group({
            name: ['vasya', [Validators.required, Validators.minLength(2)]],
            account: this.fb.group({
                email: ['vasya@gmail.com', [Validators.pattern('.+')]],
                confirm: ['vasya@gmail.com', [Validators.pattern('.+')]]
            })
        });
        console.log(this.user.status);
    }

    ngAfterViewInit() {
        this.templDrivenFormGroup.valueChanges.subscribe(v => console.log('templDrivenFormGroup', v));
        this.templDrivenFormGroup.statusChanges.subscribe(v => console.log('templDrivenFormGroup status:', v));
        setTimeout(() => {
            this.templDrivenFormGroup.setValue({bla: 'its not so easy', ku: 'but angular is cool'});
        }, 3000);

        console.dir(this.nestedForm);
    }
}
