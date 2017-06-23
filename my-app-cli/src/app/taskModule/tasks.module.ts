import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [
        TaskListComponent,
        TaskComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        TaskListComponent
    ],
    providers: [
    ],
    bootstrap: [  ]
})
export class TasksModule { }
