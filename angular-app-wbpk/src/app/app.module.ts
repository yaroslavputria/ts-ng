import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
    declarations: [
        AppComponent,
        InfoComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ],
    // exports:[]
})

export class AppModule {
}
