import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';

import template from './place.form.html'

import { PlaceData } from './place.data';

@Component({
  selector: 'place-modal-component',
  template: template,
})
export class PlaceForm  extends PlaceData implements OnInit {
  @Input() place_id: any;

  constructor(public navCtrl: NavController) {
    super();
  }

  ngOnInit() {
    super.init(this.place_id);
  }

  ngOnDestroy() {
    super.destroy();
  }

  upsertServiceEntrance() {
    MeteorObservable.call('service_entrance.upsert', this.serviceEntrance, this.place.place_id).subscribe((response) => {
      console.log('service-entrance.upsert.sucess', response);
      this.goBack();
    }, (error) => {
      console.log(`Failed to upsert due to ${error}`);
    });
  }

  goBack() {
    this.navCtrl.pop();
  }
}