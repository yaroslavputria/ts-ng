import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'task',
    template: `
        <div class="task" (click)="toggleDescription()">
            <b class="task-header">{{task.taskName}}</b> <span class="delete-task" (click)="deleteTask()">x</span>
            <p *ngIf="showDescription"><b>Task description: </b>{{task.description}}</p>
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
export class TaskComponent {
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
}
