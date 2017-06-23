import { Component, Input} from '@angular/core';

import template from './elevator.field.html'

@Component({
  selector: 'elevator-field',
  template: template,
})
export class ElevatorField {
  @Input() se: any;

  delete() {
    this.se.elevator = null;
  }

  init() {
    this.se.elevator = {
      is_dedicated: false,
      is_self_operated: false,
      size: 0
    }
  }

}
