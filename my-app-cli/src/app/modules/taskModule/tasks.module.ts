import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        TaskListComponent,
        TaskComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TaskListComponent
    ],
    providers: [
    ],
    bootstrap: [  ]
})
export class TasksModule { }
