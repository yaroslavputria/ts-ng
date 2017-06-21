import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AComponent } from './a.component';
import { BComponent } from './b.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AComponent, BComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
