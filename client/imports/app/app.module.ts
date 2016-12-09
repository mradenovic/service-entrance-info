import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MAPS_API_LOADER_CONFIG } from './app.credentials'
import { COMPONENTS } from './app.index';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(MAPS_API_LOADER_CONFIG),
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    Title,
  ],
  bootstrap: [
    COMPONENTS[0]
  ]
})
export class AppModule {}
