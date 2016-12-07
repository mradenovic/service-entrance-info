import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import template from './map.component.html'
import style from './map.component.scss'

@Component({
  selector: 'google-map',
  template: template,
  styles: [style],
})
export class MapComponent implements OnChanges {
  @Input()
  place: any;
  markers: any[];
  zoom: number = 18;

  ngOnChanges(changes: SimpleChanges) {
    if ('place' in changes) {
      this.updateMarkers();
    }
  }

  updateMarkers() {
    this.markers = [];
    if (this.place) {
      this.markers.push({
        lat: this.place.lat,
        lng: this.place.lng,
      })
    }
  }
}
