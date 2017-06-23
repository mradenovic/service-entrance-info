import { Component, Input} from '@angular/core';

import template from './restriction.field.html'

@Component({
  selector: 'restriction-field',
  template: template,
})
export class RestrictionField {
  @Input() se: any;

  delete() {
    this.se.restriction = null;
  }

  init() {
    this.se.restriction = {
      days: {
        mon: true,
        tue: true,
        wed: true,
        thu: true,
        fri: true,
        sat: false,
        sun: false
      },
      times: {
        from: '09:00',
        to: '17:00'
      }
    }
  }

}
