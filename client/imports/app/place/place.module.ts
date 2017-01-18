import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModule } from '../search/search.module'
import { ServiceEntranceModule } from '../service-entrance/service-entrance.module'
import { MapModule } from '../map/map.module'

import { PlaceComponent } from './place.component'

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    ServiceEntranceModule,
    MapModule,
  ],
  declarations: [
    PlaceComponent,
  ],
  exports: [
    PlaceComponent,
  ],
})
export class PlaceModule {}
