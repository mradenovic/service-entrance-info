import { Component, NgZone } from '@angular/core';
import {MapsAPILoader} from 'angular2-google-maps/core';
import { Router }   from '@angular/router';
import { MeteorObservable } from 'meteor-rxjs';

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
          this.upsertPlace(google_place);
          this.router.navigate(['place', google_place.place_id]);
        })
      });
    });
  }

  upsertPlace(google_place) {
    let place = this.getPlace(google_place);
    MeteorObservable.call('places.upsert', place).subscribe((response) => {
      console.log('places.upsert.sucess', response);
    }, (error) => {
      console.log(`Failed to invite due to ${error}`);
    });
  }

  getPlace(google_place): Place {
    return {
      created_at: (new Date()),
      place_id: google_place.place_id,
      formatted_address: google_place.formatted_address,
      lat: google_place.geometry.location.lat(),
      lng: google_place.geometry.location.lng(),
    }
  }
}
