import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { FormControl, Validators, NgModel, FormGroup, FormArray, NgForm, FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'c-cmp',
    template: `
        <div>
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
export class CComponent implements AfterViewInit {
    
    constructor(private fb: FormBuilder) {
    }

    ngAfterViewInit() {
    }
}
