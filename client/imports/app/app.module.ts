import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MAPS_API_LOADER_CONFIG } from './app.credentials'
import { AppRoutingModule } from './app-routing.module'
import { SearchModule } from './search/search.module'
import { NavigationModule } from './navigation/navigation.module'
import { PlacesModule } from './places/places.module'

import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(MAPS_API_LOADER_CONFIG),
    SearchModule,
    NavigationModule,
    PlacesModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    Title,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
