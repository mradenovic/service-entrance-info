import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import template from './places.component.html'

import { Places } from '../../../../both/collections/places.collection';
import { Place } from '../../../../both/models/place.model';

/* Component container for list of places */
@Component({
  selector: 'places',
  template: template,
})
export class PlacesComponent  {
  places: Observable<Place[]>;

  constructor() {
    this.places = Places.find({}).zone();
  }
}
