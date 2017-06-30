import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';
import { MyHeaderDetails } from './my-header-details.component';
import { HeaderDetailsCount } from './header-details-count.component';
@NgModule({
    declarations: [
        TaskListComponent,
        TaskComponent,
        MyHeaderDetails,
        HeaderDetailsCount
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
