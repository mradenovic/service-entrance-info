import { Component, Input} from '@angular/core';

import template from './access.field.html'

@Component({
  selector: 'access-field',
  template: template,
})
export class AccessField {
  @Input() access: any;

  ngOnInit() {
    if (!this.access) {
      this.initAccess();
    }
  }

  deleteAccess() {
    this.access = null;
  }

  initAccess() {
    this.access = {
      check_in_required: true,
      check_in_at_front_desk: true,
      level: "L",
      has_loading_dock: false,
      has_stairs: false,
      outside_stairs: false,
      has_ramp: false,
      outside_ramp: false,
      has_elevator: false,
      long_push: 0,
    }
  }

}
