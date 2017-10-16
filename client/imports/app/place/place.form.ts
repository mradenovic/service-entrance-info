import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ToastController, NavController, NavParams } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';

import template from './place.form.html'

import { PlaceData } from './place.data';

@Component({
  selector: 'place-modal-component',
  template: template,
})
export class PlaceForm  extends PlaceData implements OnInit {
  @Input() place_id: any;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController) {
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
      this.presentToast('Data sucsessfuly saved!');
      this.goBack();
    }, (error) => {
      this.presentToast(error);
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}
