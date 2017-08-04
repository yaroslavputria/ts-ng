import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a.component';
import { BCmpComponent } from './b-cmp/b-cmp.component';
import { AdDirective } from './ad.directive';

@NgModule({
    declarations: [
        AppComponent,
        AComponent,
        BCmpComponent,
        AdDirective
    ],
    imports: [
        BrowserModule
    ],
    entryComponents: [AComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
