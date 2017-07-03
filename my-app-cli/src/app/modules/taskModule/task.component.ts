import { Component, Input, Output, EventEmitter, ContentChildren, AfterContentChecked, ViewChild } from '@angular/core';
import { Task } from './task';
import { MyHeaderDetails } from './my-header-details.component';
import { HeaderDetailsCount } from './header-details-count.component';

@Component({
    selector: 'task',
    template: `
        <div class="task" (click)="toggleDescription()">
            <b class="task-header">{{task.taskName}}</b><ng-content selector="my-header-details"></ng-content> <span class="delete-task" (click)="deleteTask()">x</span>
            <p *ngIf="showDescription"><b>Task description: </b>{{task.description}}</p>
            <br/> <header-details-count></header-details-count>
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
    @ContentChildren(MyHeaderDetails) headerDetailsCmps;
    count: number;
    @ViewChild(HeaderDetailsCount) headerDetailsCountCmp;
    ngAfterContentChecked() {
        this.count = this.headerDetailsCmps.length;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            //this.headerDetailsCountCmp.count = this.count;
            this.headerDetailsCountCmp.ngOnChanges(this.count);
        }, 0);

    }

}
