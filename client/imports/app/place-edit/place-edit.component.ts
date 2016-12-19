import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import 'rxjs/add/operator/map';

import template from './place-edit.component.html'

import { Places } from '../../../../both/collections/places.collection'
import { Place } from '../../../../both/models/place.model'
import { ServiceEntrances } from '../../../../both/collections/service-entrances.collection'

@Component({
  selector: 'place-edit',
  template: template,
})
export class PlaceEditComponent  implements OnInit {
  place_id: string;
  place: Place;
  serviceEntrance: any = {location: {}};
  paramsSubscription: Subscription;
  placeSubscription: Subscription;
  serviceEntranceSubscription: Subscription;

  constructor(
    private route: ActivatedRoute, private router: Router, private titleService: Title
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .map(params => params['place_id'])
      .subscribe(place_id => {
        this.place_id = place_id;
        this.placeSubscription = MeteorObservable.subscribe('place', place_id).subscribe(() => {
          MeteorObservable.autorun().subscribe(() => {
            this.place = Places.findOne({place_id: place_id});
            this.titleService.setTitle(this.place.formatted_address);
          })
        });
        this.serviceEntranceSubscription = MeteorObservable.subscribe('service_entrance', place_id).subscribe(() => {
          MeteorObservable.autorun().subscribe(() => {
            this.serviceEntrance = ServiceEntrances.findOne({place_ids: place_id});
            this.serviceEntrance = this.serviceEntrance ? this.serviceEntrance : {}
          })
        });
      });
  }

  ngOnDestroy() {
    this.placeSubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
    this.serviceEntranceSubscription.unsubscribe();
  }

  upsertServiceEntrance() {
    MeteorObservable.call('service_entrance.upsert', this.serviceEntrance, this.place.place_id).subscribe((response) => {
      console.log('service-entrance.upsert.sucess', response);
      this.viewServiceEntrance();
    }, (error) => {
      console.log(`Failed to upsert due to ${error}`);
    });
  }

  viewServiceEntrance() {
    console.log('backtoview');
    this.router.navigate(['place', this.place.place_id])
  }
}
