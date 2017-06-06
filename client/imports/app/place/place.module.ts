import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

// import { SearchModule } from '../search/search.module'
import { ServiceEntranceModule } from '../service-entrance/service-entrance.module';
import { MapModule } from '../map/map.module';

import { PlaceViewPage } from './place.view.page';
import { PlaceFormPage } from './place.form.page';
import { PlaceView } from './place.view';
import { PlaceForm } from './place.form';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    // SearchModule,
    ServiceEntranceModule,
    MapModule,
  ],
  declarations: [
    PlaceViewPage,
    PlaceFormPage,
    PlaceView,
    PlaceForm,
  ],
  exports: [
    PlaceViewPage,
    PlaceFormPage,
    PlaceView,
    PlaceForm,
  ],
  entryComponents: [
    PlaceViewPage,
    PlaceFormPage,
    PlaceView,
    PlaceForm,
  ]
})
export class PlaceModule {}
