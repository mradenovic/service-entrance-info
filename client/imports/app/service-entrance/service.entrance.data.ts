import { NgZone } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import { ServiceEntrances } from '../../../../both/collections/service-entrances.collection'

export class ServiceEntranceData {
  se: any;
  serviceEntranceSubscription: Subscription;

  init(place_id: string) {
    this.serviceEntranceSubscription = MeteorObservable.subscribe('service_entrance', place_id).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.se = ServiceEntrances.findOne({place_ids: place_id});
      })
    });
  }

  destroy() {
    this.serviceEntranceSubscription.unsubscribe();
  }
}
