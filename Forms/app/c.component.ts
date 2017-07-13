import { Component, AfterViewInit, ViewChildren, OnInit } from '@angular/core';

import { FormControl, Validators, NgModel, FormGroup, FormArray, NgForm } from '@angular/forms';
import { TaskComponent } from './task.component';

@Component({
    moduleId: module.id,
    selector: 'c-cmp',
    template: `
        <div>
            <h4>Debounce!</h4>
            <input [formControl]="myControl" debounce/>
        </div>
        <div style="border: 1px solid green">
            <h4>Form homework:</h4>
            <button (click)="saveChanges()">Save changes</button>
            <taks-cmp *ngFor="let task of tasks; let i=index" [task]="task" (deletetask)="deleteTask(i)"></taks-cmp>
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
    @ViewChildren(TaskComponent) taskCmps;
    saveChanges() {
        this.taskCmps.forEach(taskCmp => {
            taskCmp.saveTaskDiscriptionToModel();
        });
    }
    tasks = [
        {
            taskName: 'Initial Task',
            description: 'some description for Initial task'
        },
        {
            taskName: 'First Task',
            description: 'some description for First task'
        }
    ];
    deleteTask(i) {
        this.tasks.splice(i, 1);
    }
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