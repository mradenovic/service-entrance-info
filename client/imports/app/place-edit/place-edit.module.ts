import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceEntranceModule } from '../service-entrance/service-entrance.module'
import { MapModule } from '../map/map.module'

import { PlaceEditComponent } from './place-edit.component'

@NgModule({
  imports: [
    CommonModule,
    ServiceEntranceModule,
    MapModule,
  ],
  declarations: [
    PlaceEditComponent,
  ],
  exports: [
    PlaceEditComponent,
  ],
})
export class PlaceEditModule {}
