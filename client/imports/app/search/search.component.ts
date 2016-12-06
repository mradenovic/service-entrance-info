import { Component, NgZone } from '@angular/core';
import {MapsAPILoader} from 'angular2-google-maps/core';

import template from './search.component.html'

declare var google: any;

@Component({
  selector: 'search',
  template: template,
})
export class SearchComponent  {
  google_place: any;

  constructor(
    private _loader: MapsAPILoader, private zone: NgZone) {
  }

  ngOnInit() {
    this.autocomplete()
  }

  autocomplete() {
    this._loader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        this.zone.run(() => {
          this.google_place = autocomplete.getPlace();
          console.log(this.google_place);
        })
      });
    });
  }
}
