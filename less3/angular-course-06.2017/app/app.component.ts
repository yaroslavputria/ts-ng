import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  name = 'Angular';
  text = 'not clicked yet';
  updated: number;
  result: number;

  updateDiv(event) {
    this.text = 'Span was clicked!';
  }

  processOutput(value) {

  }

  changed(event) {
    this.updated = parseInt(event.target.value);
  }

  updateNumber(value) {
    this.result = value;
  }
}
