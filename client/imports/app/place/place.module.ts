import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

// import { SearchModule } from '../search/search.module'
import { ServiceEntranceModule } from '../service-entrance/service-entrance.module';
import { MapModule } from '../map/map.module';

import { PlacePage } from './place.page';
import { PlaceModalPage } from './place.modal.page';
import { PlaceComponent } from './place.component';
import { PlaceModalComponent } from './place.modal.component';

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
    PlaceModalPage,
    PlaceComponent,
    PlaceModalComponent,
  ],
  exports: [
    PlacePage,
    PlaceModalPage,
    PlaceComponent,
    PlaceModalComponent,
  ],
  entryComponents: [
    PlacePage,
    PlaceModalPage,
    PlaceComponent,
    PlaceModalComponent,
  ]
})
export class PlaceModule {}
