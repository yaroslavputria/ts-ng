import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { HeroService } from './services/hero.service';
import { GithubService } from './services/github.service';

import { AppComponent } from './components/app.component';
import { HeroDetailCmp } from './components/hero-detail/hero-datail.component';
import { HeroesCmp } from './components/heroes/heroes.component';
import { GithubUsersInfoCmp } from './components/github-users-info/github-users-info.component';

import { TmpCmp } from './components/tmp/tmp.cmp';

import { Routes } from './routes';

@NgModule({
    declarations: [
        AppComponent,
        HeroesCmp,
        HeroDetailCmp,
        TmpCmp,
        GithubUsersInfoCmp
    ],
    imports: [
        BrowserModule,
        FormsModule,
        Routes,
        HttpModule
    ],
    providers: [
        HeroService,
        GithubService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
