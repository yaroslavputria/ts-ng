import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModuleOne }  from './ModuleOne/one.module';
import { ModuleTwo }  from './ModuleTwo/two.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
      BrowserModule,
      ModuleTwo,
      ModuleOne],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
      { provide: 'common-token', useValue: 'from root app module', multi: true }
  ]
})
export class AppModule {
}
