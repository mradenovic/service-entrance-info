import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import 'rxjs/add/operator/map';

import template from './place.component.html'

import { Places } from '../../../../both/collections/places.collection'
import { Place } from '../../../../both/models/place.model'
import { ServiceEntrances } from '../../../../both/collections/service-entrances.collection'

@Component({
  selector: 'place',
  template: template,
})
export class PlaceComponent  implements OnInit, OnDestroy {
  place: Place;
  serviceEntrance: any;
  paramsSubscription: Subscription;
  placeSubscription: Subscription;
  serviceEntranceSubscription: Subscription;

  constructor(
    private route: ActivatedRoute, private titleService: Title
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .map(params => params['place_id'])
      .subscribe(place_id => {
        this.placeSubscription = MeteorObservable.subscribe('place', place_id).subscribe(() => {
          MeteorObservable.autorun().subscribe(() => {
            this.place = Places.findOne({place_id: place_id});
            this.titleService.setTitle(this.place.formatted_address);
          })
        });
        this.serviceEntranceSubscription = MeteorObservable.subscribe('service_entrance', place_id).subscribe(() => {
          MeteorObservable.autorun().subscribe(() => {
            this.serviceEntrance = ServiceEntrances.findOne({place_ids: place_id});
          })
        });
      });
  }

  ngOnDestroy() {
    this.placeSubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
    this.serviceEntranceSubscription.unsubscribe();
  }
}
