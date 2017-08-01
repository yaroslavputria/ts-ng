import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';
import { ADirective } from './a.directivet';

import { NinjaDirective } from './ninja.directive';
import { MyNgIfDirective } from './my-ng-if.directive';
import { MyNgForDirective } from './my-ng-for.directive';
import { DoubleDivDirective } from './doublediv.directive';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task.component';
import { TaskDetailsComponent } from './task-details.component';

import { ROUTES } from './routes';
import { APP_BASE_HREF } from '@angular/common';

import { MessageResolver } from './message-resolver';

// class isValid {

// }

// @NgModule({

// })
// class CustomModule {}

// const customModuleWithProviders = {
//     ngModule: CustomModule,
//     providers: [isValid]
// };

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES/*, {enableTracing: true}*/), // forChild
        //customModuleWithProviders
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        MessageResolver

    ],
    entryComponents: [
        BComponent
    ],
    declarations: [
        AppComponent,
        AComponent,
        BComponent,
        CComponent,
        ADirective,
        NinjaDirective,
        MyNgIfDirective,
        MyNgForDirective,
        DoubleDivDirective,
        TasksComponent,
        TaskComponent,
        TaskDetailsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private i: Injector) {
        console.dir(this.i);
    }
}
