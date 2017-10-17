import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import template from './place.view.page.html';


@Component({
  selector: 'place-view-page',
  template: template,
})
export class PlaceViewPage  {
  place_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.place_id = navParams.get('place_id');
  }

}
