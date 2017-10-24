import { Component, Input} from '@angular/core';

import template from './coi.component.html'

@Component({
  selector: 'coi-component',
  template: template,
})
export class COIComponent {
  @Input() coi: any;

  toggleCOI($event) {
    if (this.coi.is_required) {
      // TODO manipulate aditional COI fields (insured, additional_isnured...)
      console.log('COI is required', this.coi.is_required);
    } else {
      // TODO manipulate aditional COI fields (insured, additional_isnured...)
      console.log('COI is required', this.coi.is_required);
    }
  }
}
