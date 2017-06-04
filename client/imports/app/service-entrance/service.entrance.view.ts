import { Component, Input } from '@angular/core';

import template from './service.entrance.view.html'

import { ServiceEntranceData } from './service.entrance.data';

@Component({
  selector: 'service-entrance-view',
  template: template,
})
export class ServiceEntranceView  extends ServiceEntranceData {
  @Input() se: any;

}
