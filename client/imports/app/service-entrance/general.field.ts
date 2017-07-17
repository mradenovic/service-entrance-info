import { Component, Input} from '@angular/core';

import template from './general.field.html'

@Component({
  selector: 'general-field',
  template: template,
})
export class GeneralField {
  @Input() se: any;

}
