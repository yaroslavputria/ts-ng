import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'task-list',
    template: `
        <div *ngIf="taskList">
            <task *ngFor="let task of taskList; let i=index" [task]="task" (deletetask)="deleteTaskFromList(i)">
                <my-header-details [details]="'Task index: '+i"></my-header-details>
            </task>
        </div>`,
})
export class TaskListComponent {
    @Input('tasks') taskList: Task[];
    deleteTaskFromList(index): void {
        this.taskList.splice(index, 1);
    }
}
