import { Component, Input} from '@angular/core';

import template from './coi.field.html'

@Component({
  selector: 'coi-field',
  template: template,
})
export class COIField {
  @Input() se: any;

  toggleCOI($event) {
    if (this.se.coi_is_required) {
      this.initCOI();
    } else {
      this.deleteCOI();
    }
  }

  deleteCOI() {
    this.se.coi = null;
  }

  initCOI() {
    this.se.coi = {
      insured: '',
      additional_isnured: ''
    }
  }

}
