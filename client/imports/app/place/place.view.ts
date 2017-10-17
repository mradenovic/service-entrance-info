import { Meteor } from 'meteor/meteor';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import template from './place.view.html';

import { PlaceData } from './place.data';
import { PlaceFormPage } from './place.form.page';
import { BlazeLoginButtonsPage } from '../blaze-login-buttons/blaze-login-buttons.page';

@Component({
  selector: 'place-component',
  template: template,
})
export class PlaceView  extends PlaceData implements OnInit {
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
    if (!Meteor.userId()) {
      const profileModal = this.modalCtrl.create(BlazeLoginButtonsPage, {  });
      profileModal.present();
    }
    if (Meteor.userId()) {
      this.navCtrl.push(PlaceFormPage, {
        place_id: this.place_id
      });
    }
  }
}
