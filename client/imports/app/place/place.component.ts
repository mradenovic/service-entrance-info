import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import template from './place.component.html'

import { PlaceClass } from './place.class';
import { PlaceModalPage } from './place.modal.page';

@Component({
  selector: 'place-component',
  template: template,
})
export class PlaceComponent  extends PlaceClass implements OnInit {
  @Input() place_id: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {
    super();
  }

  ngOnInit() {
    super.init(this.place_id);
  }

  ngOnDestroy() {
    super.destroy();
  }

  showPlaceModalPage() {
    this.navCtrl.push(PlaceModalPage, {
      place_id: this.place_id
    });
    // let placeModalPage = this.modalCtrl.create(PlaceModalPage, {place_id: this.place_id});
    // placeModalPage.present();
  }
}
