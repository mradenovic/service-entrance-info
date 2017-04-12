import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import template from './place.page.html'


@Component({
  selector: 'place-page',
  template: template,
})
export class PlacePage  {
  google_place: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.google_place = navParams.get('google_place');
  }

}
