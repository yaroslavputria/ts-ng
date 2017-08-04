import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AComponent } from './a.component';
import { BCmpComponent } from './b-cmp/b-cmp.component';
import { AdDirective } from './ad.directive';
import { UnlessDirective } from './unless.directive';
import { StarsAbbreviatPipe } from './starsabbreviat.pipe';

@NgModule({
    declarations: [
        AppComponent,
        AComponent,
        BCmpComponent,
        AdDirective,
        UnlessDirective,
        StarsAbbreviatPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [AComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
