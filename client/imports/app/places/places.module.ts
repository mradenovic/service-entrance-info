import { NgModule } from '@angular/core';

import { PlaceModule } from '../place/place.module'
import { PlaceEditModule } from '../place-edit/place-edit.module'

@NgModule({
  imports: [
    PlaceModule,
    PlaceEditModule,
  ],
})
export class PlacesModule {}
