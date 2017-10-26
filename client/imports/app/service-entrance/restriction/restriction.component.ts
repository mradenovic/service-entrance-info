import { Component, Input} from '@angular/core';

import template from './restriction.component.html'

@Component({
  selector: 'restriction-component',
  template: template,
})
export class RestrictionComponent {
  @Input() restriction: any;


    toggleRestriction($event) {
      console.log('toggle clicked: $event', $event)
      if (this.restriction.exists) {
        // TODO manipulate aditional restriction fields
        console.log('Time restriction exists', this.restriction.exists);
      } else {
        // TODO manipulate aditional restriction fields
        console.log('Time restriction exists', this.restriction.exists);
      }
    }

}
