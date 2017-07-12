import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { CComponent } from './c.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        AComponent,
        BComponent,
        CComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
