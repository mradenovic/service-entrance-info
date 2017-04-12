import { Component, NgZone, Input, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import 'rxjs/add/operator/map';

import template from './place.component.html'

import { Places } from '../../../../both/collections/places.collection'
import { Place } from '../../../../both/models/place.model'
import { ServiceEntrances } from '../../../../both/collections/service-entrances.collection'

@Component({
  selector: 'place-component',
  template: template,
})
export class PlaceComponent  implements OnInit {
  @Input() google_place: any;
  place: Place;
  serviceEntrance: any;
  placeSubscription: Subscription;
  serviceEntranceSubscription: Subscription;

  constructor(private zone: NgZone) {

  }

  ngOnInit() {
    let place_id = this.google_place.place_id
    this.placeSubscription = MeteorObservable.subscribe('place', place_id).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.place = Places.findOne({place_id: place_id});
      })
    });
    this.serviceEntranceSubscription = MeteorObservable.subscribe('service_entrance', place_id).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.serviceEntrance = ServiceEntrances.findOne({place_ids: place_id});
      })
    });
  }

  ngOnDestroy() {
    this.placeSubscription.unsubscribe();
    this.serviceEntranceSubscription.unsubscribe();
  }
}
