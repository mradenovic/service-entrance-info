import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import template from './map.component.html'
import style from './map.component.scss'

@Component({
  selector: 'google-map',
  template: template,
  styles: [style],
})
export class MapComponent implements OnChanges {
  @Input() place: any;
  @Input() serviceEntrance: any;
  @Input() action: string;
  zoom: number = 18;

  ngOnChanges(changes: SimpleChanges) {

  }

  onDragEnd($event) {
    this.updateServiceEntranceLocation($event.coords);
  }

  onMapClick($event) {
    if (this.action == 'edit' && !this.serviceEntrance.location) {
      this.serviceEntrance.location = {}
      this.updateServiceEntranceLocation($event.coords);
    }
  }

  updateServiceEntranceLocation(location) {
    this.serviceEntrance.location.lat  = location.lat;
    this.serviceEntrance.location.lng  = location.lng;
  }
}
