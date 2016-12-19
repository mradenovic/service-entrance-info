import { Component, Input,} from '@angular/core';

import { ServiceEntrance } from '../../../../both/models/service-entrance.model'
import template from './service-entrance-form.component.html'

@Component({
  selector: 'service-entrance-form',
  template: template,
})
export class ServiceEntranceFormComponent {
  @Input() serviceEntrance: ServiceEntrance;
}
