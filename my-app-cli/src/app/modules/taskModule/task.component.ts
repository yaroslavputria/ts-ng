import { Component, Input, Output, EventEmitter, ViewChildren, AfterContentChecked } from '@angular/core';
import { Task } from './task';
import { MyHeaderDetails } from './my-header-details.component';

@Component({
    selector: 'task',
    template: `
        <div class="task" (click)="toggleDescription()">
            <b class="task-header">{{task.taskName}}</b><ng-content selector="my-header-details"></ng-content> <span class="delete-task" (click)="deleteTask()">x</span>
            <p *ngIf="showDescription"><b>Task description: </b>{{task.description}}</p>
            <br/> <header-details-count [count]="count"></header-details-count>
        </div>`,
    styles: [`
    .task-header {
            }
    .task {
        border: 1px solid green;
        text-align: center;
        cursor: pointer;
    }
    .delete-task {
        color: white;
        border: 1px solid red;
        background-color: red;
        float: right;
    }`]
})
export class TaskComponent implements AfterContentChecked {
    @Input('task') task: Task;
    @Output('deletetask')
    deleteTaskEE = new EventEmitter;
    showDescription: boolean = false;
    toggleDescription(): void {
        this.showDescription = !this.showDescription;
    }
    deleteTask(): void {
        this.deleteTaskEE.emit();
    }
    @ViewChildren(MyHeaderDetails) headerDetailsCmps;
    count: number;
    ngAfterContentChecked() {
        this.count = this.headerDetailsCmps.length;
    }

}
