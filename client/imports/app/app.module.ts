import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormsModule } from '@angular/forms';

import { MAPS_API_LOADER_CONFIG } from './app.credentials'
import { AppRoutingModule } from './app-routing.module'
import { COMPONENTS } from './app.index';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(MAPS_API_LOADER_CONFIG),
    FormsModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  bootstrap: [
    COMPONENTS[0]
  ]
})
export class AppModule {}
