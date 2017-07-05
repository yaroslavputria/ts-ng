import { Component, Input, Output, EventEmitter, AfterContentInit, ContentChildren, AfterContentChecked, ViewChild, ElementRef, ViewContainerRef, ViewChildren } from '@angular/core';
import { Task } from './task';
import { MyHeaderDetails } from './my-header-details.component';
import { HeaderDetailsCount } from './header-details-count.component';

@Component({
    selector: 'task',
    template: `
        <div class="task" (click)="toggleDescription()">
            <b #i class="task-header">{{task.taskName}}</b><ng-content selector="my-header-details"></ng-content> <span class="delete-task" (click)="deleteTask()">x</span>
            <p *ngIf="showDescription"><b>Task description: </b>{{task.description}}</p>
            <br/> <header-details-count></header-details-count>
            <br/><span #sp style="font-size:7px">for 'read' parameter in @ViewChild</span>
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
export class TaskComponent implements AfterContentInit {//AfterContentChecked {
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

    @ViewChild('i') ch;//i - reference vairable in template (<b #i class="task-header">{{task.taskName}}</b>)

    @ViewChild('sp', {read: ElementRef}) sp;//it could be directive and with {read: ElementRef} we could get element (not directive)

    @ViewChild('sp', {read: ViewContainerRef}) container;

    @ViewChildren('a b') arrOfEl;//reference variables #a and #b (it's just for example dont search it in tempplate)

    // ngAfterContentChecked() {
    //     this.count = this.headerDetailsCmps.length;
    // }

    ngAfterContentInit() {//equal to commented previous method ngAfterContentChecked (there is subscriber)
        this.count = this.headerDetailsCmps.length;
        this.headerDetailsCmps.changes.subscribe(changes => {
            this.count = changes.length;
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            //this.headerDetailsCountCmp.count = this.count;
            this.headerDetailsCountCmp.ngOnChanges(this.count);
        }, 0);
        console.log(this.ch.nativeElement.textContent);//this.ch - elementRef got by @ViewChild
        console.log(this.sp);//element with property nativeElement
        console.log(this.container);//
    }

}
