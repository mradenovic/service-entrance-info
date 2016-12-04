import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import template from './place.component.html'

import { Places } from '../../../../both/collections/places.collection';
import { Place } from '../../../../both/models/place.model';

@Component({
  selector: 'place',
  template: template,
})
export class PlaceComponent implements OnChanges{
  @Input()
  google_place: any;
  place: Place;

  ngOnChanges(changes: SimpleChanges) {
    this.place = Places.findOne({place_ids: this.google_place.place_id});
  }
}
