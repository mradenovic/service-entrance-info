import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import template from './place.form.page.html'


@Component({
  selector: 'place-form-page',
  template: template,
})
export class PlaceFormPage  {
  place_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.place_id = navParams.get('place_id');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
