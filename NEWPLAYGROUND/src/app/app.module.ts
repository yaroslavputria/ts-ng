import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AComponent } from './a.component';
import { BCmpComponent } from './b-cmp/b-cmp.component';

import { AnimationsComponent } from './animations-cmp/aniamtions.component';

import { AdDirective } from './ad.directive';
import { UnlessDirective } from './unless.directive';
import { StarsAbbreviatPipe } from './starsabbreviat.pipe';

import { ROUTES } from './routes';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AComponent,
        BCmpComponent,
        AdDirective,
        UnlessDirective,
        StarsAbbreviatPipe,
        AnimationsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ROUTES
    ],
    entryComponents: [AComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }