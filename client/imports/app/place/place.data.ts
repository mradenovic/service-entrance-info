import { NgZone } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import { Places } from '../../../../both/collections/places.collection';
import { Place } from '../../../../both/models/place.model';
import { ServiceEntrances } from '../../../../both/collections/service-entrances.collection';

export class PlaceData {
  place: Place;
  serviceEntrance: any;
  placeSubscription: Subscription;
  serviceEntranceSubscription: Subscription;

  init(place_id: string) {
    this.placeSubscription = MeteorObservable.subscribe('place', place_id).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.place = Places.findOne({place_id: place_id});
      });
    });
    let query = {
      place_ids: [place_id]
    }
    this.serviceEntranceSubscription = MeteorObservable.subscribe('service_entrance', place_id).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.serviceEntrance = ServiceEntrances.findOne(query);
      });
    });
  }

  destroy() {
    this.placeSubscription.unsubscribe();
    this.serviceEntranceSubscription.unsubscribe();
  }
}
