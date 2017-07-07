import { Component, Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  name = 'Angular';
  constructor(@Inject('common-token') public items) {

  }
}
