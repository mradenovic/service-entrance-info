import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

// import { SearchModule } from '../search/search.module'
import { ServiceEntranceModule } from '../service-entrance/service-entrance.module'
import { MapModule } from '../map/map.module'

import { PlacePage } from './place.page'
import { PlaceComponent } from './place.component'

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    // SearchModule,
    ServiceEntranceModule,
    MapModule,
  ],
  declarations: [
    PlacePage,
    PlaceComponent,
  ],
  exports: [
    PlacePage,
    PlaceComponent,
  ],
  entryComponents: [
    PlacePage,
  ]
})
export class PlaceModule {}
