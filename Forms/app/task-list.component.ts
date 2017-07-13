import { Component, OnInit, ViewChildren } from '@angular/core';
import { TaskComponent } from './task.component';

@Component({
    moduleId: module.id,
    selector: 'task-list-cmp',
    template: `
        <div style="border: 1px solid green; width: 300px">
            <button (click)="saveChanges()">Save changes</button>
            <taks-cmp *ngFor="let task of tasks; let i=index" [task]="task" (deletetask)="deleteTask(i)"></taks-cmp>
        </div>
    `,
    styles: [`
    `]
})
export class TaskListComponent implements OnInit {

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
            description: 'some description for First task some description for First task some description for First task'
        },
        {
            taskName: 'Advanced Task',
            description: 'some description for Advanced task AdvancedAdvancedAdvancedAdvancedAdvancedAdvanced'
        },
        {
            taskName: 'Last Task',
            description: 'some description for Last task'
        }
    ];
    deleteTask(i) {
        this.tasks.splice(i, 1);
    }
    ngOnInit() {
        
    }
}
