import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import template from './place.page.html'


@Component({
  selector: 'place-page',
  template: template,
})
export class PlacePage  {
  place_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.place_id = navParams.get('place_id');
  }

}
