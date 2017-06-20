import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './components/app.component';
import { HeroDetailCmp } from './components/hero-detail/hero-datail.component';


import { TmpCmp } from './components/tmp/tmp.cmp';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailCmp,
        TmpCmp
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
