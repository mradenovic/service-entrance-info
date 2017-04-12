import { Component, Input,} from '@angular/core';
// import { Router } from '@angular/router';

import { ServiceEntrance } from '../../../../both/models/service-entrance.model'
import template from './service-entrance-view.component.html'

@Component({
  selector: 'service-entrance-view',
  template: template,
})
export class ServiceEntranceViewComponent {
  @Input() place: any;
  @Input() se: ServiceEntrance;
  // @Input() formatted_address: string;

  constructor() {

  }

  editPlace() {
    // this.router.navigate(['place', this.place.place_id, 'edit']);
  }
}
