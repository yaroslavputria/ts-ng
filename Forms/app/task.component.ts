import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { FormControl, Validators, NgModel } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'taks-cmp',
    template: `
        <div style="border: 1px solid blue">
            <span class="delete-btn" (click)="removeMe()">x</span>
            <h4>{{task.taskName}}</h4>
            <textarea class="discription" [formControl]="formCtrl"></textarea><span *ngIf="formCtrl.dirty">dirty</span>
            <br/><button (click)="revertChanges()">Revert</button>
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
        .delete-btn {
            cursor: pointer;
            color: red;
            float: right;
        }
        .discription {
            height: 65px;
        }
    `]
})
export class TaskComponent implements OnInit {
    @Input()task;
    formCtrl;
    revertChanges() {
        this.formCtrl.reset(this.task.description);
    }
    saveTaskDiscriptionToModel() {
        this.task.description = this.formCtrl.value;
        this.formCtrl.markAsPristine();
    }
    ngOnInit() {
        this.formCtrl = new FormControl(this.task.description);
    }
    @Output('deletetask')
    deleteTaskEE = new EventEmitter;
    removeMe() {
        this.deleteTaskEE.emit();
    }
}