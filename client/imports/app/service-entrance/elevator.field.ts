import { Component, Input} from '@angular/core';

import template from './elevator.field.html'

@Component({
  selector: 'elevator-field',
  template: template,
})
export class ElevatorField {
  @Input() se: any;

  toggleElevator($event) {
    console.log('toggle clicked: $event', $event)
    if (this.se.has_elevator) {
      this.initElevator();
    } else {
      this.deleteElevator();
    }
  }

  deleteElevator() {
    this.se.elevator = null;
  }

  initElevator() {
    this.se.elevator = {
      is_dedicated: false,
      is_self_operated: false,
      size: 0
    }
  }

}
