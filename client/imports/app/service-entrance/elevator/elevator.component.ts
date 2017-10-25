import { Component, Input} from '@angular/core';

import template from './elevator.component.html'

@Component({
  selector: 'elevator-component',
  template: template,
})
export class ElevatorComponent {
  @Input() elevator: any;

  toggleElevator($event) {
    console.log('toggle clicked: $event', $event)
    if (this.elevator.is_available) {
      // TODO manipulate aditional elevator fields
      console.log('Elevator is available', this.elevator.is_available);
    } else {
      // TODO manipulate aditional elevator fields
      console.log('Elevator is available', this.elevator.is_available);
    }
  }

}
