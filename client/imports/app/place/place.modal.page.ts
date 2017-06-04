import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import template from './place.modal.page.html'


@Component({
  selector: 'place-modal-page',
  template: template,
})
export class PlaceModalPage  {
  place_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.place_id = navParams.get('place_id');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
