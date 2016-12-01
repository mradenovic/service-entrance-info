import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import template from './places.component.html'

import { Places } from '../../../../both/collections/places.collection';

/* Component container for list of places */
@Component({
  selector: 'places',
  template: template,
})
export class PlacesComponent  {
  places: Observable<any[]>;

  constructor() {
    this.places = Places.find({}).zone();
  }
}
