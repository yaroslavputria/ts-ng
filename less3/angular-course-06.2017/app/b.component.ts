import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'b-comp',
  template: `
      <div>
  <span [style.color]="color" [class.some]="show" [attr.title]="show ? titleValue : null">
    I am B component, and I received: {{num}}
  </span>
      </div>`
})
export class BComponent {

  color = 'green';
  show = true;
  titleValue = 'I am hovered';

  @Input() set num(value) {
    if (value) {
      setTimeout(() => {
        this.change.emit(value + 2);
      }, 2000);
    }
  }

  @Output() change = new EventEmitter();
}
