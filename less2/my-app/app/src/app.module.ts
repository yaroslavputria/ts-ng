import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppCmp} from './app.cmp'
import {InfoCmp} from './components/info'

@NgModule({
    declarations: [AppCmp, InfoCmp],
    imports: [
        BrowserModule
    ],
    bootstrap: [AppCmp]
})

export class AppModule {

}