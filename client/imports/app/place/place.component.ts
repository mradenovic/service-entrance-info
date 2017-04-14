import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import template from './place.component.html'

import { PlaceClass } from './place.class';

@Component({
  selector: 'place-component',
  template: template,
})
export class PlaceComponent  extends PlaceClass implements OnInit {
  @Input() place_id: any;

  constructor() {
    super();
  }

  ngOnInit() {
    super.init(this.place_id);
  }

  ngOnDestroy() {
    super.destroy();
  }
}
