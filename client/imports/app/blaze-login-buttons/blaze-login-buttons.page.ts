import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import template from './blaze-login-buttons.page.html';


@Component({
  selector: 'blaze-login-buttons-page',
  template: template,
})
export class BlazeLoginButtonsPage  {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
