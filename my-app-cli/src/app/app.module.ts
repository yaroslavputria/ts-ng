import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HeroService } from './services/hero.service';


import { AppComponent } from './components/app.component';
import { HeroDetailCmp } from './components/hero-detail/hero-datail.component';
import { HeroesCmp } from './components/heroes/heroes.component';

import { TmpCmp } from './components/tmp/tmp.cmp';

import { Routes } from './routes';

@NgModule({
    declarations: [
        AppComponent,
        HeroesCmp,
        HeroDetailCmp,
        TmpCmp
    ],
    imports: [
        BrowserModule,
        FormsModule,
        Routes
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
