import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Title }     from '@angular/platform-browser';

import 'rxjs/add/operator/map';

import template from './place.component.html'

import { Places } from '../../../../both/collections/places.collection'
import { Place } from '../../../../both/models/place.model'

@Component({
  selector: 'place',
  template: template,
})
export class PlaceComponent  implements OnInit {
  place: Place;
  places: Observable<Place[]>;

  constructor(
    private route: ActivatedRoute, private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params
      .map(params => params['place_id'])
      .subscribe(place_id => {
        this.place = Places.findOne({place_id: place_id});
        if (this.place) {
          this.titleService.setTitle( this.place.formatted_address);
        }
      });
  }
}
