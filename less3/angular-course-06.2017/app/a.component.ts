import { Attribute, Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'a-comp',
  template: '<span (click)="notifyParent()">I am A component, and I received: {{text}}</span>'
})
export class AComponent {

  @Output() childClicked = new EventEmitter();

  notifyParent() {
    this.childClicked.emit('some child component value');
  }

  constructor(@Attribute('title') title) {

  }

  @Input('someVeryLongEasyToUnderstandBinding') set text(value) {

  };
}
