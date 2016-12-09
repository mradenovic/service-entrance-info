import { Component, NgZone } from '@angular/core';
import {MapsAPILoader} from 'angular2-google-maps/core';
import { Router }   from '@angular/router';

import template from './search.component.html'

import { Places } from '../../../../both/collections/places.collection'
import { Place } from '../../../../both/models/place.model'

declare var google: any;

@Component({
  selector: 'search',
  template: template,
})
export class SearchComponent  {

  constructor(
    private _loader: MapsAPILoader, private zone: NgZone, private router: Router) {
  }

  ngOnInit() {
    this.autocomplete()
  }

  autocomplete() {
    this._loader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        this.zone.run(() => {
          let google_place = autocomplete.getPlace();
          this.updatePlaces(google_place)
          this.router.navigate(['place', google_place.place_id]);
        })
      });
    });
  }

  updatePlaces(google_place) {
    let place = Places.findOne({place_id: google_place.place_id})
    if (!place) {
      Places.collection.insert({
        place_id: google_place.place_id,
        formatted_address: google_place.formatted_address,
        lat: google_place.geometry.location.lat(),
        lng: google_place.geometry.location.lng(),
      });
    }
  }
}
