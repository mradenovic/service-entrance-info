import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MAPS_API_LOADER_CONFIG } from './app.credentials'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlacesComponent } from './places/places.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(MAPS_API_LOADER_CONFIG),
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    PlacesComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
