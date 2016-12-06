import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MAPS_API_LOADER_CONFIG } from './app.credentials'
import { COMPONENTS } from './app.index';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot(MAPS_API_LOADER_CONFIG),
  ],
  declarations: [
    ...COMPONENTS,
  ],
  bootstrap: [
    COMPONENTS[0]
  ]
})
export class AppModule {}
